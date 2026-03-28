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
    <p style="margin:0 0 24px;">当日は「AIで自分のプロダクトを実際に動かす」2日間です。難しい知識は不要です。手を動かすことだけ考えてきてください💪</p>

    <!-- LINE追加 -->
    <div style="background:#06c755;border-radius:12px;padding:20px;text-align:center;margin-bottom:24px;">
      <p style="color:white;font-weight:bold;font-size:15px;margin:0 0 8px;">📣 当日までの情報はLINEでお届けします</p>
      <p style="color:#d1fae5;font-size:13px;margin:0 0 16px;">見逃さないよう、必ず登録してください🔔</p>
      <a href="https://aicamp.gokindler.com/line/open/cskkmLgwdrhk"
         style="display:inline-block;background:white;color:#06c755;text-decoration:none;padding:12px 32px;border-radius:8px;font-weight:bold;font-size:15px;">
        LINEを追加する →
      </a>
    </div>

    <!-- 事前準備 -->
    <div style="background:#f0f4ff;border:1px solid #c7d2fe;border-radius:12px;padding:20px;margin-bottom:24px;">
      <h3 style="font-size:14px;color:#4f46e5;margin:0 0 12px;">📋 当日までに3つだけ準備をお願いします</h3>
      <table style="width:100%;font-size:13px;border-collapse:collapse;">
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;">①</td><td style="padding:6px 0;"><strong>Claudeアカウント作成 &amp; Proへの加入</strong><br/><a href="https://utlink.jp/l/ytUIKBNKQB9z" style="color:#4f46e5;">https://utlink.jp/l/ytUIKBNKQB9z</a></td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;">②</td><td style="padding:6px 0;"><strong>GitHubアカウント作成（無料）</strong><br/><a href="https://utlink.jp/l/0StKFJH3CcLY" style="color:#4f46e5;">https://utlink.jp/l/0StKFJH3CcLY</a></td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;">③</td><td style="padding:6px 0;"><strong>Claude for Desktopをインストール（無料）</strong><br/><a href="https://utlink.jp/l/0EmkjkOM8nJ0" style="color:#4f46e5;">https://utlink.jp/l/0EmkjkOM8nJ0</a></td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;">④</td><td style="padding:6px 0;"><strong>Antigravityに登録（無料）</strong><br/><a href="https://utlink.jp/l/JcL4qGPd8sin" style="color:#4f46e5;">https://utlink.jp/l/JcL4qGPd8sin</a></td></tr>
      </table>
    </div>

    <!-- 開催概要 -->
    <div style="border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin-bottom:24px;">
      <h3 style="font-size:14px;color:#374151;margin:0 0 12px;">🗓 開催概要</h3>
      <table style="width:100%;font-size:13px;border-collapse:collapse;">
        <tr><td style="padding:5px 0;color:#6b7280;width:80px;">日時</td><td style="padding:5px 0;">${dateLabel}</td></tr>
        <tr><td style="padding:5px 0;color:#6b7280;">スケジュール</td><td style="padding:5px 0;">10:00 開始 / 12:00〜13:00 昼休憩 / 17:00 終了</td></tr>
        <tr><td style="padding:5px 0;color:#6b7280;">会場</td><td style="padding:5px 0;">東京都渋谷区神宮前3-27-15 FLAG 3I（309号室）</td></tr>
        <tr><td style="padding:5px 0;color:#6b7280;">最寄り駅</td><td style="padding:5px 0;">明治神宮前駅 徒歩5分 / 原宿駅 徒歩8分</td></tr>
        <tr><td style="padding:5px 0;color:#6b7280;">Googleマップ</td><td style="padding:5px 0;"><a href="https://maps.app.goo.gl/XPbCQJ4E9hvCZoWs9" style="color:#4f46e5;">地図を開く</a></td></tr>
      </table>
    </div>

    <!-- 持ち物 -->
    <div style="border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin-bottom:24px;">
      <h3 style="font-size:14px;color:#374151;margin:0 0 12px;">🎒 持ち物</h3>
      <p style="font-size:13px;margin:0;">✅ パソコン（必須）<br/>✅ 充電器（必須）<br/><br/>Wi-Fiは会場でご用意します。昼食は各自ご用意ください🍱</p>
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

/** KINDLER社内への新規申込通知 */
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
