import FadeIn from "./FadeIn";

const comparisonItems = [
  { label: "目的", camp: "自分のアプリを公開する", others: "言語の文法を覚え、知識を得る" },
  { label: "期間", camp: "2日間（超集中・最短ルート）", others: "3ヶ月〜（挫折率高）" },
  { label: "内容", camp: "設計 ＋ AI活用", others: "ソースコードの記述" },
  { label: "費用", camp: "20万円（即成果・伴走型）", others: "30〜80万円（外注・転職型）" },
  { label: "AI活用", camp: "前提（AIを最大限活用）", others: "補助、もしくは禁止も" },
];

export default function ComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-graph-paper opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[540px] px-6">
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black tracking-[0.4em] text-primary uppercase">Why Us?</span>
            <div className="h-1 w-12 bg-primary/20 rotate-1" />
          </div>
          <h2 className="mb-20 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
            「学ぶ」と「作る」は、
            <br />
            <span className="relative inline-block mt-2">
              まったく違う。
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {/* Others (Visible by default) */}
          <FadeIn delay={100}>
            <div className="relative rounded-sm border border-slate-100 bg-slate-50/50 p-8 rotate-[-0.5deg]">
              <h3 className="mb-8 text-sm font-bold text-slate-400 text-center uppercase tracking-widest">
                従来のスクール・独学
              </h3>
              <div className="space-y-6">
                {comparisonItems.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1 border-b border-slate-200/50 pb-5 last:border-0 last:pb-0">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item.label}</span>
                    <p className="text-sm font-medium text-slate-400">{item.others}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Product Camp (Premium Highlight) */}
          <FadeIn delay={200}>
            <div className="relative group">
              {/* Card Container with Taped Look */}
              <div className="relative z-10 rounded-sm border border-slate-200 bg-white p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] rotate-[0.5deg] transition-transform hover:rotate-0 duration-500">

                {/* Tape Decoration */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-24 bg-primary/10 border border-primary/5 backdrop-blur-sm -rotate-2 shadow-sm flex items-center justify-center">
                  <span className="text-[9px] font-black text-primary tracking-[0.2em]">BEST CHOICE</span>
                </div>

                <h3 className="mb-10 text-xl font-black text-primary text-center tracking-tight">
                  Product Camp
                </h3>

                <div className="space-y-8">
                  {comparisonItems.map((item, i) => (
                    <div key={i} className="flex flex-col gap-2 border-b border-primary/5 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary/30" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                      </div>
                      <p className="text-base font-bold text-slate-950 leading-snug pl-2.5 border-l-2 border-primary/20">{item.camp}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-xl bg-primary/5 p-6 text-center border border-primary/10">
                  <p className="text-[13px] font-bold text-primary leading-relaxed">
                    「AIを駆使して最速でプロダクトを形にする力」を伝授します。
                  </p>
                </div>
              </div>

              {/* Decorative logic lines behind card */}
              <div className="absolute -right-4 top-1/2 h-24 w-[1px] bg-primary/10" />
              <div className="absolute -right-4 top-1/2 h-[1px] w-8 bg-primary/10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
