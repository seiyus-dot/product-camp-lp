"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const DATES = [
  { id: "apr11-12", label: "4月11日（土）・12日（日）" },
  { id: "apr25-26", label: "4月25日（土）・26日（日）" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  cardholderName: string;
  agreedToTerms: boolean;
};

type FormErrors = Partial<Record<keyof FormData | "card", string>>;

export default function ApplyForm() {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        appearance: {
          theme: "stripe",
          variables: {
            colorPrimary: "#4f46e5",
            borderRadius: "12px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif",
          },
        },
      }}
    >
      <FormInner />
    </Elements>
  );
}

function FormInner() {
  const stripe = useStripe();
  const elements = useElements();

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    cardholderName: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "必須項目です";
    if (!form.email.trim()) {
      newErrors.email = "必須項目です";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }
    if (!form.phone.trim()) newErrors.phone = "必須項目です";
    if (!form.address.trim()) newErrors.address = "必須項目です";
    if (!form.date) newErrors.date = "参加日程を選択してください";
    if (!form.cardholderName.trim()) newErrors.cardholderName = "必須項目です";
    if (!cardComplete) newErrors.card = "カード情報を入力してください";
    if (!form.agreedToTerms) newErrors.agreedToTerms = "利用規約への同意が必要です";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !stripe || !elements) return;

    setLoading(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          date: form.date,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("カード情報が取得できませんでした");

      const { error: stripeError } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: form.cardholderName,
            email: form.email,
            phone: form.phone,
            address: { line1: form.address },
          },
        },
      });

      if (stripeError) throw new Error(toJapaneseError(stripeError.code, stripeError.message ?? "決済中にエラーが発生しました"));

      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "エラーが発生しました";
      setErrors((prev) => ({ ...prev, card: message }));
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">お申し込みを受け付けました</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          ご登録のメールアドレスに確認メールをお送りしました。<br />
          詳細は担当者よりご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-indigo-50 border-b border-indigo-100 px-8 py-6">
          <h2 className="text-xl font-bold text-indigo-900 mb-1">PRODUCT AI CAMP 申込フォーム</h2>
          <p className="text-indigo-700 text-sm">以下をご入力の上、お申し込みください。</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="px-8 py-8 space-y-6">

          <FormField label="氏名" required error={errors.name}>
            <input
              type="text"
              placeholder="例：山田 太郎"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass(errors.name)}
            />
          </FormField>

          <FormField label="メールアドレス" required error={errors.email}>
            <input
              type="email"
              placeholder="例：info@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass(errors.email)}
            />
          </FormField>

          <FormField label="電話番号" required error={errors.phone}>
            <input
              type="tel"
              placeholder="例：090-1234-5678"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass(errors.phone)}
            />
          </FormField>

          <FormField label="住所" required hint="契約書の送付先" error={errors.address}>
            <input
              type="text"
              placeholder="例：東京都渋谷区〇〇1-2-3"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className={inputClass(errors.address)}
            />
          </FormField>

          <FormField label="参加日程" required error={errors.date}>
            <div className="space-y-2">
              {DATES.map((d) => (
                <label
                  key={d.id}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                    form.date === d.id
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="date"
                    value={d.id}
                    checked={form.date === d.id}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="accent-indigo-600"
                  />
                  <span className="text-sm text-gray-700 font-medium">{d.label}</span>
                </label>
              ))}
            </div>
          </FormField>

          <FormField label="カード名義人" required hint="カードに印字された名前（半角ローマ字）" error={errors.cardholderName}>
            <input
              type="text"
              placeholder="例：TARO YAMADA"
              value={form.cardholderName}
              onChange={(e) => setForm({ ...form, cardholderName: e.target.value.toUpperCase() })}
              className={inputClass(errors.cardholderName)}
            />
          </FormField>

          <FormField label="クレジットカード情報" required hint="¥200,000（税込）" error={errors.card}>
            <div className={`px-4 py-3.5 rounded-xl border transition-colors ${
              errors.card ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
            }`}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "14px",
                      color: "#111827",
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif",
                      "::placeholder": { color: "#9ca3af" },
                    },
                    invalid: { color: "#ef4444" },
                  },
                  hidePostalCode: true,
                }}
                onChange={(e) => {
                  setCardComplete(e.complete);
                  if (e.error) {
                    setErrors((prev) => ({ ...prev, card: e.error!.message }));
                  } else {
                    setErrors((prev) => { const n = { ...prev }; delete n.card; return n; });
                  }
                }}
              />
            </div>
          </FormField>

          <div className="pt-2">
            <div className={`rounded-xl border p-4 ${errors.agreedToTerms ? "border-red-300 bg-red-50" : "border-gray-200"}`}>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agreedToTerms}
                  onChange={(e) => setForm({ ...form, agreedToTerms: e.target.checked })}
                  className="mt-0.5 w-4 h-4 accent-indigo-600"
                />
                <span className="text-sm text-gray-700 leading-relaxed">
                  利用規約およびプライバシーポリシーに同意します
                  <span className="text-red-500 ml-1">*</span>
                </span>
              </label>
              {errors.agreedToTerms && (
                <p className="text-red-500 text-xs mt-2 ml-7">{errors.agreedToTerms}</p>
              )}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading || !stripe}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-base shadow-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  処理中...
                </>
              ) : (
                "申し込む（¥200,000 税込）"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({
  label, required, hint, error, children,
}: {
  label: string; required?: boolean; hint?: string; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label className="text-sm font-semibold text-gray-800">{label}</label>
        {required && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">必須</span>}
        {hint && <span className="text-xs text-gray-400">{hint}</span>}
      </div>
      {children}
      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  );
}

function toJapaneseError(code: string | undefined, fallback: string): string {
  const map: Record<string, string> = {
    card_declined:           "カードが拒否されました。カード会社にお問い合わせください",
    insufficient_funds:      "残高が不足しています",
    incorrect_number:        "カード番号が正しくありません",
    invalid_number:          "カード番号が正しくありません",
    invalid_expiry_month:    "有効期限（月）が正しくありません",
    invalid_expiry_year:     "有効期限（年）が正しくありません",
    expired_card:            "カードの有効期限が切れています",
    incorrect_cvc:           "セキュリティコードが正しくありません",
    invalid_cvc:             "セキュリティコードが正しくありません",
    processing_error:        "決済処理中にエラーが発生しました。時間をおいて再度お試しください",
    do_not_honor:            "カードが使用できません。カード会社にお問い合わせください",
    lost_card:               "このカードは使用できません",
    stolen_card:             "このカードは使用できません",
    call_issuer:             "カード会社への確認が必要です。カード裏面の番号にお問い合わせください",
  };
  return (code && map[code]) ?? fallback ?? "決済中にエラーが発生しました。時間をおいて再度お試しください";
}

function inputClass(error?: string) {
  return `w-full px-4 py-3 rounded-xl border text-sm text-gray-900 transition-colors outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-400 ${
    error ? "border-red-300 bg-red-50 focus:ring-red-400" : "border-gray-200 bg-white hover:border-gray-300"
  }`;
}
