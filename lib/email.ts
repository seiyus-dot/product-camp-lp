import nodemailer from "nodemailer";

function createTransport() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

const FROM = `"PRODUCT AI CAMP / KINDLER株式会社" <${process.env.GMAIL_USER}>`;

const DATE_LABELS: Record<string, string> = {
  "apr11-12": "4月11日（土）・12日（日）10:00〜17:00",
  "apr25-26": "4月25日（土）・26日（日）10:00〜17:00",
};

export interface ApplyMailData {
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  paymentIntentId: string;
}

/** 申込者への自動返信 */
export async function sendApplyClientMail(data: ApplyMailData) {
  const transporter = createTransport();
  const dateLabel = DATE_LABELS[data.date] ?? data.date;
  await transporter.sendMail({
    from: FROM,
    to: data.email,
    subject: "【PRODUCT AI CAMP】お申し込みを受け付けました",
    html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Hiragino Sans',sans-serif;max-width:600px;margin:0 auto;color:#111827;">
  <div style="background:#4f46e5;padding:32px;text-align:center;">
    <h1 style="color:white;margin:0;font-size:24px;letter-spacing:0.05em;">PRODUCT AI CAMP</h1>
    <p style="color:#c7d2fe;margin:8px 0 0;font-size:13px;">KINDLER株式会社</p>
  </div>
  <div style="padding:32px;background:white;">
    <p style="font-size:16px;font-weight:bold;margin:0 0 16px;">${data.name} 様</p>
    <p style="margin:0 0 8px;">このたびは「PRODUCT AI CAMP」にお申し込みいただき、誠にありがとうございます！</p>
    <p style="margin:0 0 24px;">当日までの詳細はLINEでお送りします。まだ追加していない方は必ずご登録ください。</p>

    <div style="background:#06c755;border-radius:12px;padding:20px;text-align:center;margin-bottom:24px;">
      <p style="color:white;font-weight:bold;font-size:15px;margin:0 0 12px;">📣 LINEで当日の情報をお届けします</p>
      <a href="https://aicamp.gokindler.com/line/open/cskkmLgwdrhk"
         style="display:inline-block;background:white;color:#06c755;text-decoration:none;padding:12px 32px;border-radius:8px;font-weight:bold;font-size:15px;">
        LINEを追加する →
      </a>
    </div>

    <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 20px;"/>
    <h3 style="font-size:14px;color:#374151;margin:0 0 12px;">【お申し込み内容】</h3>
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      <tr><td style="padding:6px 0;color:#6b7280;width:130px;">氏名</td><td style="padding:6px 0;">${data.name}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">メールアドレス</td><td style="padding:6px 0;">${data.email}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">電話番号</td><td style="padding:6px 0;">${data.phone}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">住所</td><td style="padding:6px 0;">${data.address}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">参加日程</td><td style="padding:6px 0;">${dateLabel}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">参加費</td><td style="padding:6px 0;">¥200,000（税込）</td></tr>
    </table>
  </div>
  <div style="padding:16px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;">
    KINDLER株式会社 | このメールに心当たりがない場合はご連絡ください
  </div>
</div>`,
  });
}

// ==================== 銀行振込 ====================

export interface BankApplyMailData {
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
}

/** 銀行振込申込者への自動返信 */
export async function sendApplyClientMailBank(data: BankApplyMailData) {
  const transporter = createTransport();
  const dateLabel = DATE_LABELS[data.date] ?? data.date;
  await transporter.sendMail({
    from: FROM,
    to: data.email,
    subject: "【PRODUCT AI CAMP】お申し込みを受け付けました（銀行振込）",
    html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Hiragino Sans',sans-serif;max-width:600px;margin:0 auto;color:#111827;">
  <div style="background:#4f46e5;padding:32px;text-align:center;">
    <h1 style="color:white;margin:0;font-size:24px;letter-spacing:0.05em;">PRODUCT AI CAMP</h1>
    <p style="color:#c7d2fe;margin:8px 0 0;font-size:13px;">KINDLER株式会社</p>
  </div>
  <div style="padding:32px;background:white;">
    <p style="font-size:16px;font-weight:bold;margin:0 0 16px;">${data.name} 様</p>
    <p style="margin:0 0 24px;">このたびは「PRODUCT AI CAMP」にお申し込みいただき、誠にありがとうございます！<br/>下記口座へのお振込をお願いいたします。入金確認後に参加確定メールをお送りします。</p>

    <div style="background:#f0f4ff;border:1px solid #c7d2fe;border-radius:12px;padding:20px;margin-bottom:24px;">
      <h3 style="font-size:14px;color:#4f46e5;margin:0 0 12px;">【振込先】</h3>
      <table style="width:100%;font-size:13px;border-collapse:collapse;">
        <tr><td style="padding:5px 0;color:#6b7280;width:100px;">銀行</td><td style="padding:5px 0;">三井住友銀行（0009）</td></tr>
        <tr><td style="padding:5px 0;color:#6b7280;">支店</td><td style="padding:5px 0;">恵比寿支店（656）</td></tr>
        <tr><td style="padding:5px 0;color:#6b7280;">種別</td><td style="padding:5px 0;">普通</td></tr>
        <tr><td style="padding:5px 0;color:#6b7280;">口座番号</td><td style="padding:5px 0;font-weight:bold;">9114243</td></tr>
        <tr><td style="padding:5px 0;color:#6b7280;">口座名義</td><td style="padding:5px 0;font-weight:bold;">キンドラーカブシキガイシャ</td></tr>
        <tr><td style="padding:5px 0;color:#6b7280;">金額</td><td style="padding:5px 0;font-weight:bold;color:#4f46e5;">¥200,000（税込）</td></tr>
      </table>
    </div>

    <div style="text-align:center;margin-bottom:24px;">
      <p style="font-size:14px;color:#374151;margin:0 0 12px;">振込が完了しましたら、下のボタンを押してお知らせください。</p>
      <a href="https://product-camp-lp.vercel.app/transfer-done?email=${encodeURIComponent(data.email)}&name=${encodeURIComponent(data.name)}"
         style="display:inline-block;background:#4f46e5;color:white;text-decoration:none;padding:14px 36px;border-radius:10px;font-weight:bold;font-size:15px;">
        振込完了を報告する
      </a>
    </div>

    <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 20px;"/>
    <h3 style="font-size:14px;color:#374151;margin:0 0 12px;">【お申し込み内容】</h3>
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      <tr><td style="padding:6px 0;color:#6b7280;width:130px;">氏名</td><td style="padding:6px 0;">${data.name}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">メールアドレス</td><td style="padding:6px 0;">${data.email}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">電話番号</td><td style="padding:6px 0;">${data.phone}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">住所</td><td style="padding:6px 0;">${data.address}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">参加日程</td><td style="padding:6px 0;">${dateLabel}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">支払方法</td><td style="padding:6px 0;">銀行振込</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">参加費</td><td style="padding:6px 0;">¥200,000（税込）</td></tr>
    </table>
  </div>
  <div style="padding:16px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;">
    KINDLER株式会社 | このメールに心当たりがない場合はご連絡ください
  </div>
</div>`,
  });
}

/** 銀行振込 社内通知 */
export async function sendApplyNotifyMailBank(data: BankApplyMailData) {
  const to = process.env.KINDLER_NOTIFY_EMAIL || process.env.GMAIL_USER!;
  const transporter = createTransport();
  const dateLabel = DATE_LABELS[data.date] ?? data.date;
  await transporter.sendMail({
    from: FROM,
    to,
    subject: `【CAMP 銀行振込】新規申し込み：${data.name}`,
    html: `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
  <h2 style="color:#f59e0b;border-bottom:2px solid #f59e0b;padding-bottom:8px;">銀行振込申し込みがありました（入金待ち）</h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    <tr style="background:#f3f4f6;"><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;width:160px;">氏名</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.name}</td></tr>
    <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">メールアドレス</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.email}</td></tr>
    <tr style="background:#f3f4f6;"><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">電話番号</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.phone}</td></tr>
    <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">住所</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.address}</td></tr>
    <tr style="background:#f3f4f6;"><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">参加日程</td><td style="padding:10px;border:1px solid #e5e7eb;">${dateLabel}</td></tr>
    <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">参加費</td><td style="padding:10px;border:1px solid #e5e7eb;">¥200,000（税込）</td></tr>
  </table>
  <p style="margin-top:16px;font-size:13px;color:#6b7280;">入金確認後、<a href="https://product-camp-lp.vercel.app/admin">管理ページ</a>から確定メールを送信してください。</p>
</div>`,
  });
}

// ==================== 入金確定 ====================

/** 入金確定メール */
export async function sendConfirmMail(data: { name: string; email: string; date: string }) {
  const transporter = createTransport();
  const dateLabel = DATE_LABELS[data.date] ?? data.date;
  await transporter.sendMail({
    from: FROM,
    to: data.email,
    subject: "【PRODUCT AI CAMP】入金を確認しました・参加確定のご連絡",
    html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Hiragino Sans',sans-serif;max-width:600px;margin:0 auto;color:#111827;">
  <div style="background:#4f46e5;padding:32px;text-align:center;">
    <h1 style="color:white;margin:0;font-size:24px;letter-spacing:0.05em;">PRODUCT AI CAMP</h1>
    <p style="color:#c7d2fe;margin:8px 0 0;font-size:13px;">KINDLER株式会社</p>
  </div>
  <div style="padding:32px;background:white;">
    <p style="font-size:16px;font-weight:bold;margin:0 0 16px;">${data.name} 様</p>
    <p style="margin:0 0 8px;">入金を確認いたしました。参加が確定しました！</p>
    <p style="margin:0 0 24px;">当日は「${dateLabel}」にお待ちしております。</p>

    <div style="background:#06c755;border-radius:12px;padding:20px;text-align:center;margin-bottom:24px;">
      <p style="color:white;font-weight:bold;font-size:15px;margin:0 0 12px;">📣 当日の詳細はLINEでお届けします</p>
      <a href="https://aicamp.gokindler.com/line/open/cskkmLgwdrhk"
         style="display:inline-block;background:white;color:#06c755;text-decoration:none;padding:12px 32px;border-radius:8px;font-weight:bold;font-size:15px;">
        LINEを追加する →
      </a>
    </div>
  </div>
  <div style="padding:16px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;">
    KINDLER株式会社 | このメールに心当たりがない場合はご連絡ください
  </div>
</div>`,
  });
}

/** 振込完了報告 管理者通知 */
export async function sendTransferDoneNotifyMail(data: { name: string; email: string }) {
  const to = process.env.KINDLER_NOTIFY_EMAIL || process.env.GMAIL_USER!;
  const transporter = createTransport();
  await transporter.sendMail({
    from: FROM,
    to,
    subject: `【CAMP 振込報告】${data.name} さんが振込完了を報告しました`,
    html: `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
  <h2 style="color:#f59e0b;border-bottom:2px solid #f59e0b;padding-bottom:8px;">振込完了の報告がありました</h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    <tr style="background:#f3f4f6;"><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;width:160px;">氏名</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.name}</td></tr>
    <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">メールアドレス</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.email}</td></tr>
  </table>
  <p style="margin-top:16px;font-size:13px;color:#374151;">銀行口座をご確認の上、<a href="https://product-camp-lp.vercel.app/admin" style="color:#4f46e5;font-weight:bold;">管理ページ</a>から入金確定・確定メール送信をしてください。</p>
</div>`,
  });
}

/** KINDLER社内への新規申込通知（カード） */
export async function sendApplyNotifyMail(data: ApplyMailData) {
  const to = process.env.KINDLER_NOTIFY_EMAIL || process.env.GMAIL_USER!;
  const transporter = createTransport();
  const dateLabel = DATE_LABELS[data.date] ?? data.date;
  await transporter.sendMail({
    from: FROM,
    to,
    subject: `【PRODUCT AI CAMP】新規申し込み：${data.name}`,
    html: `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
  <h2 style="color:#4f46e5;border-bottom:2px solid #4f46e5;padding-bottom:8px;">新規申し込みがありました</h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    <tr style="background:#f3f4f6;"><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;width:160px;">氏名</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.name}</td></tr>
    <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">メールアドレス</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.email}</td></tr>
    <tr style="background:#f3f4f6;"><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">電話番号</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.phone}</td></tr>
    <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">住所</td><td style="padding:10px;border:1px solid #e5e7eb;">${data.address}</td></tr>
    <tr style="background:#f3f4f6;"><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">参加日程</td><td style="padding:10px;border:1px solid #e5e7eb;">${dateLabel}</td></tr>
    <tr><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">参加費</td><td style="padding:10px;border:1px solid #e5e7eb;">¥200,000（税込）</td></tr>
    <tr style="background:#f3f4f6;"><td style="padding:10px;border:1px solid #e5e7eb;font-weight:bold;">PaymentIntent ID</td><td style="padding:10px;border:1px solid #e5e7eb;font-family:monospace;">${data.paymentIntentId}</td></tr>
  </table>
</div>`,
  });
}
