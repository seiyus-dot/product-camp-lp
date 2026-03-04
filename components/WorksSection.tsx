import FadeIn from "./FadeIn";

const works = [
  {
    id: "01",
    tag: "Marketing",
    title: "口コミ獲得アプリ",
    description: "来店客にQRコードで口コミ投稿を促し、Googleマップの評価を自然に、かつ劇的に増やす仕組みです。",
    image: "/images/skill-01.png",
    stats: "REVIEW UP +240%",
  },
  {
    id: "02",
    tag: "Lead Gen",
    title: "Web診断コンテンツ",
    description: "パズル感覚で質問に答えると、最適な解決策を表示。そのままスムーズにLINE登録へと繋げます。",
    image: "/images/skill-02.png",
    stats: "CVR 18.5%",
  },
  {
    id: "03",
    tag: "Workflow",
    title: "LINE連携タスク管理",
    description: "「あ、あれやらなきゃ」をその場でLINE。AIが要件を整理し、自動でカレンダーや通知へ飛ばします。",
    image: "/images/skill-03.png",
    stats: "SAVE 2H/DAY",
  },
  {
    id: "04",
    tag: "UI/UX",
    title: "スワイプ型アンケート",
    description: "直感的に「○ or ✕」で答えるUI。ユーザーを飽きさせず、真剣な回答データを短時間で回収します。",
    image: "/images/skill-04.png",
    stats: "FINISH RATE 92%",
  },
  {
    id: "05",
    tag: "Reservation App",
    title: "ネイルサロン予約アプリ",
    description: "スタッフやメニューを選び、チャット感覚でLINEから予約完結。顧客管理とスケジュールを自動で同期します。",
    video: "/videos/salon_demo_169.mp4",
    stats: "BOOKING 24/7",
  },
];

export default function WorksSection() {
  return (
    <section className="bg-slate-50 py-32 overflow-hidden">
      <div className="mx-auto max-w-[540px] px-6">
        <FadeIn>
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full bg-primary/5 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] text-primary uppercase">
              Success Cases
            </span>
          </div>
          <h2 className="mb-16 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
            すべて、設計図
            <br />
            <span className="relative inline-block mt-2">
              ＋ AI だけで。
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </FadeIn>

        <div className="space-y-32">
          {works.map((work, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group relative flex flex-col gap-10">
                {/* Mockup Area - Large & Framed */}
                <div className="relative mx-auto w-full">
                  {/* Outer Shadow/Glow */}
                  <div className="absolute -inset-4 rounded-[48px] bg-primary/10 opacity-0 blur-3-xl transition-opacity duration-1000 group-hover:opacity-100" />

                  {/* Device Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/5 to-transparent" />
                    {work.video ? (
                      <video
                        src={work.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={work.image}
                        alt={work.title}
                        className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                      />
                    )}

                    {/* Technical Placeholder Backdrop (Hide for video so it's clear) */}
                    {!work.video && (
                      <>
                        <div className="absolute inset-0 bg-graph-paper opacity-40 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-100 text-primary/40 shadow-sm mb-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="text-[8px] font-mono font-bold text-primary/40 tracking-[0.5em] uppercase">
                            AI_LOGIC_CONSTRUCTING...
                          </span>
                        </div>
                      </>
                    )}

                    {/* Stats Badge */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/50 shadow-xl">
                        <span className="font-mono text-[11px] font-bold text-primary tracking-wider">
                          {work.stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Numbering Background */}
                  <div className="absolute -top-16 -left-8 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <span className="font-bebas text-[180px] leading-none text-primary/10">
                      {work.id}
                    </span>
                  </div>
                </div>

                {/* Text Area */}
                <div className="relative px-4 text-center">
                  <span className="mb-4 block font-black text-primary/40 text-[12px] tracking-[0.4em] uppercase">
                    Case Study {work.id}
                  </span>
                  <h3 className="mb-4 text-2xl font-black text-slate-900 leading-tight">
                    {work.title}
                  </h3>
                  <p className="mx-auto max-w-[320px] text-[15px] leading-relaxed text-slate-700 font-medium">
                    {work.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Final Statement for Works */}
        <FadeIn>
          <div className="mt-32 rounded-[40px] bg-primary p-12 text-center shadow-2xl shadow-primary/20">
            <p className="text-[15px] font-bold leading-relaxed text-white">
              これらはすべて、講師が「コードを書かずに」
              <br />
              実開発したプロダクトの記録です。
              <br />
              あなたも、この「作る力」を手にしませんか？
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
