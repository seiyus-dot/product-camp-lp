import FadeIn from "./FadeIn";

const featuresIntensive = [
  "2日間集中講座 (オンライン/オフライン)",
  "事前課題・予習教材",
  "Day 1: アイデア設計・プロンプト術",
  "Day 2: AI構築・デプロイ・発表",
  "受講生限定コミュニティ参加権",
];

const featuresSupport = [
  "グループコンサル (月2回)",
  "チャットサポート (随時)",
  "インプット動画教材 (更新あり)",
  "受講生コミュニティでの交流",
  "プロダクト改善・収益化相談",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-graph-paper opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      {/* Tech labels */}
      <div className="absolute top-1/4 -left-12 font-mono text-[8px] text-primary/10 tracking-[1em] select-none pointer-events-none -rotate-90 uppercase">
        System_Valuation_Schema
      </div>

      <div className="relative z-10 mx-auto max-w-[540px] px-6">
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black tracking-[0.4em] text-primary uppercase">Pricing</span>
            <div className="h-1 w-12 bg-primary/20 rotate-1" />
          </div>
          <h2 className="mb-20 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
            あなたのプランを、
            <br />
            <span className="relative inline-block mt-2">
              AIで現実に。
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </FadeIn>

        <div className="space-y-16">
          {/* 2-day intensive */}
          <FadeIn delay={100}>
            <div className="relative group">
              {/* Taped Look Header */}
              <div className="absolute -top-3 left-8 z-20 bg-primary px-4 py-1 -rotate-1 shadow-md">
                <span className="text-[9px] font-black text-white tracking-[0.2em] uppercase text-shadow-sm">Main bootcamp</span>
              </div>

              <div className="relative overflow-hidden rounded-sm border-2 border-primary/20 bg-primary/[0.02] p-10 pt-16 shadow-[20px_20px_60px_rgba(0,0,0,0.03)] transition-all duration-500 group-hover:bg-primary/[0.04] group-hover:shadow-[30px_30px_80px_rgba(0,0,0,0.06)]">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="mb-2 text-2xl font-black text-slate-950 tracking-tight">
                      2日間集中講座
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 tracking-wider">SKILL ACQUISITION</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-1 justify-end">
                      <span className="font-bebas text-5xl text-primary leading-none">200,000</span>
                      <span className="font-mono text-[10px] font-bold text-slate-300">JPY</span>
                    </div>
                    <p className="text-[9px] text-slate-300 mt-1 uppercase tracking-tighter">Tax Included</p>
                  </div>
                </div>

                <div className="mb-10 h-px bg-gradient-to-r from-primary/20 to-transparent w-full" />

                <ul className="grid gap-5">
                  {featuresIntensive.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary border border-primary flex items-center justify-center">
                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[13px] font-bold leading-relaxed text-slate-700 transition-colors group-hover:text-slate-900">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech background hint */}
                <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </div>
            </div>
          </FadeIn>

          {/* Monthly support */}
          <FadeIn delay={200}>
            <div className="relative group">
              {/* Taped Look Header */}
              <div className="absolute -top-3 right-8 z-20 bg-slate-900 px-4 py-1 rotate-1 shadow-md">
                <span className="text-[9px] font-black text-white tracking-[0.2em] uppercase">After Support</span>
              </div>

              <div className="relative overflow-hidden rounded-sm border-2 border-slate-900/10 bg-slate-50 p-10 pt-16 shadow-[20px_20px_60px_rgba(0,0,0,0.03)] transition-all duration-500 hover:bg-slate-100/50">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="mb-2 text-2xl font-black text-slate-950 leading-tight">
                      サポートコミュニティ
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 tracking-wider">CONTINUOUS GROWTH</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-1 justify-end text-slate-950">
                      <span className="font-bebas text-5xl leading-none">10,000</span>
                      <span className="font-mono text-[10px] font-bold opacity-40">/ MO</span>
                    </div>
                    <p className="text-[9px] text-slate-300 mt-1 uppercase tracking-tighter text-right">Graduates Only</p>
                  </div>
                </div>

                <div className="mb-10 h-px bg-slate-200 w-full" />

                <ul className="grid gap-5">
                  {featuresSupport.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                        <svg className="h-2.5 w-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[13px] font-bold leading-relaxed text-slate-600 transition-colors group-hover:text-slate-900">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="mt-20 relative px-8 py-10 rounded-sm border border-slate-100 bg-slate-50 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4 h-1 w-8 bg-slate-200" />
              <p className="text-[13px] leading-relaxed text-slate-500 font-medium">
                クレジットカード決済、銀行振込に対応。
                <br />
                一括払いのほか、分割払いについては
                <br />
                公式LINEよりお気軽にご相談ください。
              </p>
            </div>
            {/* Tech hint */}
            <div className="absolute top-0 right-0 p-2 font-mono text-[7px] text-slate-200">PAYMENT_SECURE_v2</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
