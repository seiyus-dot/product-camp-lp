export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
      <div className="prose prose-sm text-gray-700 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">1. 事業者情報</h2>
          <p>キンドラー株式会社（以下「当社」）は、個人情報の保護に関する法律（個人情報保護法）を遵守し、以下のとおり個人情報を取り扱います。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">2. 取得する情報</h2>
          <p>当社は、PRODUCT AI CAMPへのお申し込みにあたり、以下の情報を取得します。</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>電話番号</li>
            <li>住所</li>
            <li>支払情報（クレジットカード情報はStripe社が管理し、当社サーバーには保存されません）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">3. 利用目的</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>本サービスの提供および運営管理</li>
            <li>申込み確認・参加案内等のご連絡</li>
            <li>決済処理</li>
            <li>法令に基づく対応</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">4. 第三者への提供</h2>
          <p>当社は、以下の場合を除き、個人情報を第三者に提供しません。</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>ご本人の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>決済処理のためStripe, Inc.に提供する場合（同社のプライバシーポリシーが適用されます）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">5. 安全管理措置</h2>
          <p>当社は、個人情報への不正アクセス、紛失、破損、改ざん、漏洩等を防止するため、適切な安全管理措置を講じます。通信はSSL/TLSにより暗号化されています。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">6. 開示・訂正・削除</h2>
          <p>ご本人から個人情報の開示、訂正、削除等のご請求があった場合は、本人確認のうえ合理的な期間内に対応します。info@gokindler.com までお問い合わせください。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">7. 保存期間</h2>
          <p>取得した個人情報は、利用目的達成後または法令で定める保存期間終了後に速やかに削除します。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">8. お問い合わせ</h2>
          <p>個人情報の取り扱いに関するお問い合わせは下記までご連絡ください。</p>
          <div className="mt-2">
            <p>キンドラー株式会社</p>
            <p>メール：info@gokindler.com</p>
          </div>
        </section>

        <div className="pt-4 text-sm text-gray-500">
          <p>制定日：2025年4月1日</p>
        </div>
      </div>
    </div>
  );
}
