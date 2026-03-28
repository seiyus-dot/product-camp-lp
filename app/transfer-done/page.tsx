"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function TransferDoneContent() {
  const params = useSearchParams();
  const name = params.get("name") ?? "";
  const email = params.get("email") ?? "";

  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    if (!name || !email) return;
    setStatus("loading");
    fetch("/api/transfer-done", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  }, [name, email]);

  if (status === "loading") {
    return (
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 text-sm">送信中...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p className="text-gray-700 font-semibold mb-2">送信に失敗しました</p>
        <p className="text-gray-500 text-sm">お手数ですが info@gokindler.com までご連絡ください。</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-3">振込完了の報告を受け付けました</h2>
      <p className="text-gray-500 text-sm leading-relaxed">
        {name ? `${name} 様、` : ""}ありがとうございます。<br />
        担当者が入金を確認次第、参加確定メールをお送りします。
      </p>
    </div>
  );
}

export default function TransferDonePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-12 max-w-md w-full">
        <div className="mb-8 text-center">
          <h1 className="text-lg font-bold text-indigo-700">PRODUCT AI CAMP</h1>
        </div>
        <Suspense fallback={<p className="text-center text-gray-400 text-sm">読み込み中...</p>}>
          <TransferDoneContent />
        </Suspense>
      </div>
    </div>
  );
}
