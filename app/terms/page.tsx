export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">PRODUCT AI CAMP 契約書</h1>
      <p className="text-sm text-gray-500 mb-8">書面の内容をよく読んでください</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第1条（目的）</h2>
          <p className="mb-2">本契約は、受講申込者（以下「甲」という）が、KINDLER株式会社（以下「乙」という）の運営するProduct AI CAMP（以下「本スクール」という）に受講申込を行い、乙がこれを提供するにあたり、両者の権利義務を定めることを目的とする。</p>
          <p className="mb-2">本スクールは、コードを一切書かずに2日間でアプリを開発・公開するためのAI活用スキル（プロンプトデザイン、システム設計、データベース連携、デプロイ等）の習得を支援するものである。</p>
          <p>本スクールは学習効果や就職・転職、収益化等の成果を保証するものではない。甲はこれを承諾のうえ申込みを行う。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第2条（本スクールの概要と役務の内容）</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">役務の内容</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>事前課題および予習教材の提供</li>
                <li>2日間の集中講座（オフラインまたはオンライン）の実施</li>
                <li>AIツール（Claude Code等）および公開プラットフォーム（GitHub, Vercel）を活用した演習サポート</li>
                <li>受講生限定コミュニティへの参加権付与</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">受講環境</h3>
              <p>甲が必要とするPC、ソフトウェア、インターネット接続環境、および生成AIツール等の利用料は甲の責任・負担にて用意する。</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">役務提供期間</h3>
              <p>原則として、本講座が開催される2日間。ただし、別途甲乙が合意した期間がある場合はその期間とする。</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">受講費用および支払方法</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>商品の数量：【1個】Product AI CAMP（2日間集中講座）</li>
                <li>受講費用（総額）：200,000円（税込）</li>
                <li>支払方法：クレジットカード決済、銀行振込その他乙が指定する方法</li>
                <li>支払時期：契約締結後5日以内、または乙の請求書に記載する期日まで</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">役務提供開始日</h3>
              <p>乙が甲の申込み・支払いを確認した後、14日以内に受講開始のための案内（または教材）を送付する。これをもって本スクールの役務提供が開始されたものとみなす。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第3条（書面交付義務と特定商取引法に基づく表示）</h2>
          <p className="mb-2">乙は、本契約が特定継続的役務提供に該当するときは、特定商取引法の規定に基づき、以下の事項を記載した書面（または同等の電子書面）を甲に交付する。</p>
          <ul className="list-disc list-inside space-y-1 pl-2 mb-2">
            <li>事業者名、代表者名、所在地、電話番号、メールアドレス</li>
            <li>役務の内容、対価（受講費用）、支払方法・時期、役務提供期間</li>
            <li>クーリング・オフに関する事項</li>
            <li>中途解約に関する事項</li>
            <li>苦情や相談等の受付窓口</li>
          </ul>
          <p>乙は、ウェブサイト上に「特定商取引法に基づく表示」として、前項の事項等を消費者が確認できるよう掲示する。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第4条（オンライン利用規約）</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold mb-1">ID・パスワードの管理</h3>
              <p>甲は、乙より発行された教材閲覧用等のIDおよびパスワードを善良な管理者の注意をもって管理する。第三者への貸与・譲渡・貸し借り・共有等は一切禁止する。</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">禁止行為</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>本スクールの学習コンテンツ、構造化プロンプト、システム設計図等を、甲の個人的学習目的以外に、複製・転載・第三者へ開示・提供してはならない</li>
                <li>受講環境の技術的障害やシステムエラー等を故意に誘発させる行為、または他の受講者や第三者の学習を妨害する行為を行ってはならない</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">システム不具合への対応</h3>
              <p className="mb-1">乙は、サービス提供にあたり、システム障害やメンテナンス等により一時的にサービスを停止する場合がある。</p>
              <p>乙は、本スクールで活用する外部AIツールや外部プラットフォーム（Claude, GitHub, Vercel, Firebase等）の仕様変更、不具合、停止に起因する学習の遅延や損害について責任を負わない。ただし、乙に重大な過失がある場合を除く。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第5条（成果および免責事項）</h2>
          <p className="mb-2">乙は、本スクールの受講により、甲がAIスキルを一定水準に習得できること、または就職・転職、自社内製化、収入増などの具体的成果を得られることを保証しない。</p>
          <p>甲が本スクールを通じて得た情報、または制作したプロダクトを利用した結果について、一切の責任は甲が負うものとし、乙はこれに関していかなる損害賠償責任も負わない。ただし、乙に重大な過失がある場合はこの限りではない。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第6条（個人情報の取り扱い・プライバシーポリシー）</h2>
          <p className="mb-2">乙は、本スクールの提供にあたり取得した甲の個人情報を、「個人情報の保護に関する法律」その他関連法令および乙のプライバシーポリシーに従って、適切に取り扱う。</p>
          <p className="mb-2">甲が本スクール上で投稿・提出した課題、制作物、チャットでの発言内容等には、個人情報が含まれる場合がある。乙は本契約の目的（学習指導・運営改善・品質向上）以外でこれを利用しない。</p>
          <p>乙は、サービスの運営管理や品質向上のため、学習システムの利用履歴やアクセスログなどを収集する場合がある。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第7条（クーリング・オフの適用）</h2>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li>乙は、本契約の内容を十分に読み、理解のうえ本契約を締結するものとする。</li>
            <li>本契約は、クーリング・オフの対象となる。乙は、本契約書面を受領した日から起算して、8日を経過する日までの間は、書面又は電磁的方法（電子メール等）にて本契約の解除を行うことができる。当該解除の効力は、乙が当該書面を発生したときに生じる。この場合、甲は、乙に対し、支払済みの商品代金の全額を速やかに返還し、納入済みの本商品の使用停止に要する費用を負担する。また、甲は、乙に対し、納入ずみの本商品の使用により乙が得た利益に相当する金銭を請求することができず、解除に伴う損害賠償及び違約金の支払いを請求することができない。</li>
            <li>前項の規定にかかわらず、甲が不実のことを告げたことにより乙が誤認し、又は甲が威迫したことにより乙が困惑して、本契約の解除が行われなかった場合には、改めて本契約の解除を行うことができる旨が記載された法定の書面を乙が甲から受領した日から起算して8日を経過するまでは、乙は、書面又は電磁的方法（電子メール等）にて本契約の解除を行うことができる。</li>
            <li>電磁的方法（電子メール等）は support@gokindler.com とする。</li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第8条（契約期間と更新）</h2>
          <p className="mb-2">本契約の契約期間は、第2条に定める役務提供期間（2日間およびそれに付随する事前学習期間）とする。</p>
          <p>講座終了後の継続サポートコミュニティ（月額10,000円/税込）への加入および更新条件については、別途甲乙間の合意または乙が定める所定の申込手続によるものとする。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第9条（知的財産権）</h2>
          <p className="mb-2">本業務の履行過程において乙によって作成された教材、プロンプトテンプレート、システム構成図、ノウハウ等にかかる知的財産権・著作権（著作権法第27条および第28条に定める権利を含む）は、すべて乙に帰属する。</p>
          <p>甲は、乙の実施する研修業務について、写真撮影、録画、録音またはそれに準ずる行為を行わない。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第10条（競業避止等及び協力関係）</h2>
          <p className="mb-2">甲は、本契約期間中及び本契約終了後3年間、乙の事前の書面による承諾なく、以下の行為を行ってはならない。</p>
          <ul className="list-disc list-inside space-y-1 pl-2 mb-2">
            <li>甲が、自らまたは第三者を介して、乙と同様のAI教育サービスを提供すること</li>
            <li>甲が、乙の競合するAIスクールや教育事業者に対して出資・経営参加を行うこと、またはこれらの事業者と提携すること</li>
            <li>甲が、乙の関係者（講師・スタッフなど）を、競合するAIスクールや教育事業者の講師・スタッフとして勧誘・引き抜くこと</li>
            <li>甲が、第三者が運営する競合するAIスクールや教育事業に関与・協力すること</li>
          </ul>
          <p>上記に違反した場合、違反者は相手方に対して損害賠償責任を負い、違約金として500万円を支払うものとする。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第11条（損害賠償）</h2>
          <p className="mb-2">甲または乙が本契約に違反し、相手方に損害を与えた場合、損害を与えた当事者は、当該損害を賠償する責任を負う。</p>
          <p>乙の故意または重大な過失によらないシステム不具合や、外部プラットフォームの障害により甲が被った損害については、乙はその責任を負わない。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第12条（契約解除）</h2>
          <p className="mb-2">甲または乙は、相手方が次の各号の一に該当する場合、何らの催告を要せず直ちに本契約を解除できる。</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>本契約に違反し、相当期間を定めても是正されないとき</li>
            <li>支払の停止、破産手続・再生手続等の申立があったとき</li>
            <li>反社会的勢力であることが判明したとき</li>
            <li>その他本契約を継続しがたい正当な事由があるとき</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第13条（反社会的勢力の排除）</h2>
          <p className="mb-2">甲および乙は、自らまたは関係者が反社会的勢力に該当しないこと、および暴力的な要求行為を行わないことを表明し、保証する。</p>
          <p>これに反した事実が判明した場合、相手方は催告なく本契約を解除できる。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">第14条（準拠法および合意管轄）</h2>
          <p>本契約の成立、効力、解釈および履行については、日本法を準拠法とする。</p>
        </section>

        <div className="pt-4 border-t border-gray-200 text-sm text-gray-500 space-y-1">
          <p>KINDLER株式会社</p>
          <p>お問い合わせ：support@gokindler.com</p>
        </div>
      </div>
    </div>
  );
}
