import FadeIn from "./FadeIn";

const skills = [
  {
    title: "AIへの指示文設計",
    item: "PROMPT DESIGN",
    description: "意図を正確に理解させバグを抑える「構造化プロンプト」の描き方を習得します。",
    step: "01",
    accent: "indigo",
    stats: ["STRUCT: 98%", "LOGIC: 0x4F"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    title: "Webアプリの仕組み",
    item: "SYSTEM ARCHITECTURE",
    description: "UI・サーバー・DBがどう連携するか。図解で共通言語を身につけます。",
    step: "02",
    accent: "cyan",
    stats: ["ARCH: LAYERED", "SYNC: REALTIME"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "DB設計・連携",
    item: "DATABASE & API",
    description: "データの保存・取得方法を体験。AIによる効率的なDB設計手法を学びます。",
    step: "03",
    accent: "purple",
    stats: ["DB: FIREBASE", "QL: NoSQL"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "GitHub・Vercel公開",
    item: "DEPLOYMENT",
    description: "コードをGitHubで管理し、Vercelで誰でもアクセス可能な状態にします。",
    step: "04",
    accent: "emerald",
    stats: ["OPS: VERCEL", "CI: GITHUB"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
      </svg>
    )
  },
];

const colorConfig: Record<string, any> = {
  indigo: { bg: "bg-indigo-600", light: "bg-indigo-50", border: "border-indigo-100", accent: "border-indigo-500", text: "text-indigo-600" },
  cyan: { bg: "bg-cyan-600", light: "bg-cyan-50", border: "border-cyan-100", accent: "border-cyan-500", text: "text-cyan-600" },
  purple: { bg: "bg-purple-600", light: "bg-purple-50", border: "border-purple-100", accent: "border-purple-500", text: "text-purple-600" },
  emerald: { bg: "bg-emerald-600", light: "bg-emerald-50", border: "border-emerald-100", accent: "border-emerald-500", text: "text-emerald-600" },
};

export default function OutcomeSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-32">
      {/* Realistic Graph Paper Background */}
      <div className="absolute inset-0 bg-graph-paper opacity-70 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* Technical Blueprint Ornaments */}
      <div className="absolute top-12 left-12 font-mono text-[8px] text-primary/10 tracking-[0.4em] select-none pointer-events-none rotate-90 origin-left">
        ARCHITECTURE_SCHEMA_V3
      </div>
      <div className="absolute bottom-12 right-12 font-mono text-[8px] text-primary/10 tracking-[0.4em] select-none pointer-events-none">
        00_PROTOTYPE_STABLE
      </div>
      <div className="absolute top-1/2 -left-4 font-mono text-[7px] text-primary/10 tracking-widest select-none pointer-events-none -rotate-90">
        LAT: 35.6895 N
      </div>
      <div className="absolute top-1/2 -right-4 font-mono text-[7px] text-primary/10 tracking-widest select-none pointer-events-none rotate-90">
        LNG: 139.6917 E
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[540px] px-6">
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Skill Master</span>
            <div className="h-1 w-12 bg-primary/20 rotate-[-2deg]" />
          </div>
          <h2 className="mb-12 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
            2日間で覚醒する、
            <br />
            <span className="relative inline-block mt-2">
              4つのコア・スキル。
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </FadeIn>

        <div className="space-y-10">
          {skills.map((skill, i) => {
            const config = colorConfig[skill.accent];
            // Alternating slight rotations like sticky notes
            const rotation = i % 2 === 0 ? "rotate-[-0.8deg]" : "rotate-[0.6deg]";

            return (
              <FadeIn key={i} delay={i * 100}>
                <div className={`group relative transition-transform hover:rotate-0 duration-500 ${rotation}`}>
                  {/* Memo Paper Card */}
                  <div className={`relative overflow-hidden rounded-sm border border-slate-100 border-l-4 ${config.accent} bg-white p-8 shadow-[10px_10px_30px_rgba(0,0,0,0.04)]`}>

                    {/* Tape Decoration */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-16 bg-white/60 border border-slate-100 backdrop-blur-sm -rotate-1 shadow-sm" />

                    <div className="flex flex-col gap-6">
                      <div className="flex items-start justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${config.light} ${config.text} shadow-inner`}>
                          {skill.icon}
                        </div>
                        <span className="font-bebas text-4xl text-slate-100 select-none">
                          {skill.step}
                        </span>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <span className={`text-[10px] font-black tracking-[0.2em] ${config.text} uppercase`}>
                            {skill.item}
                          </span>
                        </div>
                        <h3 className="mb-3 text-xl font-black text-slate-950">
                          {skill.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-slate-500 font-medium">
                          {skill.description}
                        </p>
                      </div>

                      {/* Technical Detail Badge */}
                      <div className="flex flex-wrap gap-2">
                        {skill.stats.map((s, idx) => (
                          <span key={idx} className="bg-slate-50 text-[9px] font-bold text-slate-400 px-2 py-1 rounded-md border border-slate-100 font-mono">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
