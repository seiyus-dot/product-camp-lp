export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">利用規約</h1>
      <div className="prose prose-sm text-gray-700 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">第1条（適用）</h2>
          <p>本規約は、キンドラー株式会社（以下「当社」）が提供するPRODUCT AI CAMP（以下「本サービス」）の利用に関し、当社と参加者との間の権利義務関係を定めるものです。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">第2条（申込みと成立）</h2>
          <p>申込みは、本フォームへの必要事項の入力および決済情報の送信をもって完了とします。当社が申込みを受理した時点で参加契約が成立します。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">第3条（参加費用）</h2>
          <p>参加費用は200,000円（税込）です。クレジットカードまたは銀行振込にてお支払いいただきます。銀行振込の場合は、お申し込みから7日以内にお振込みください。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">第4条（キャンセルポリシー）</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>開催14日前まで：全額返金</li>
            <li>開催7日前まで：50%返金</li>
            <li>開催7日前以降：返金不可</li>
          </ul>
          <p className="mt-2">キャンセルのご連絡は info@gokindler.com までお願いします。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">第5条（開催の中止・変更）</h2>
          <p>当社の都合により開催を中止または変更する場合、参加者に速やかに通知します。中止の場合は参加費を全額返金します。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">第6条（禁止事項）</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>講座内容の無断録音・録画・撮影</li>
            <li>講座内容の第三者への無断転載・転用</li>
            <li>他の参加者への迷惑行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">第7条（免責事項）</h2>
          <p>本サービスへの参加により生じた損害について、当社の故意または重過失による場合を除き、当社は責任を負いません。</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">第8条（準拠法・管轄）</h2>
          <p>本規約は日本法に準拠し、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
        </section>

        <div className="pt-4 text-sm text-gray-500">
          <p>制定日：2025年4月1日</p>
          <p>キンドラー株式会社</p>
        </div>
      </div>
    </div>
  );
}
