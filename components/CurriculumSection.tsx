import FadeIn from "./FadeIn";

const day1 = [
  {
    time: "10:00-11:00",
    phase: "事前講義",
    title: "Webアプリの全体像を知る",
    content: "UI・サーバー・DB・GitHubの関係を、初心者向けに図解で詳しく解説。",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    time: "11:00-12:00",
    phase: "環境構築",
    title: "AIツールをセットアップ",
    content: "Claude CodeやGitHub、Vercelの準備を1時間で完了させます。",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    time: "13:00-15:00",
    phase: "Phase 1",
    title: "AIに指示して画面を作る",
    content: "AIを活用し、1日の終わりまでにToDoアプリのUIを自力で構築。",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
  },
  {
    time: "15:00-17:00",
    phase: "Phase 2",
    title: "データベースと繋ぐ",
    content: "GoogleスプレッドシートをDBに。入力データが即座に反映されます。",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

const day2 = [
  {
    time: "10:00-12:00",
    phase: "Phase 2",
    title: "本格DB（Firebase）へ移行",
    content: "スプレッドシートから高速なFirebaseへ。プロの技術に触れます。",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    time: "13:00-14:00",
    phase: "Phase 3",
    title: "GitHubにアップロード",
    content: "はじめてのリポジトリ作成。コードを世界へ出す準備を進めます。",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    time: "14:00-15:00",
    phase: "Phase 3",
    title: "Vercelで世界一速く公開",
    content: "URLを発行。自分のアプリに世界中からアクセスできる瞬間です。",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    time: "15:00-16:00",
    phase: "Phase 3",
    title: "AI独自機能を追加",
    content: "Gemini AIを使い、自分だけのインテリジェンスをアプリに搭載。",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    ),
  },
  {
    time: "16:30-17:00",
    phase: "発表",
    title: "成果シェア・振り返り",
    content: "完成したURLを共有。2日間の激変を仲間と分かち合います。",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
];

function CurriculumItem({ item }: { item: any }) {
  return (
    <div className="relative pl-14 group">
      {/* Rich Icon Container */}
      <div className="absolute -left-[24px] top-0 z-20">
        {/* Soft Glow */}
        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

        {/* Main Glass Container */}
        <div className="relative flex h-12 w-12 items-center justify-center rounded-[18px] bg-white border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-primary/10">
          <div className="text-primary group-hover:animate-pulse">
            {item.icon}
          </div>

          {/* Decorative tech dots */}
          <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary/40 border border-white opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-primary/20 border border-white opacity-0 group-hover:opacity-100 transition-opacity delay-75" />
        </div>
      </div>

      <div className="pb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded">
            <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[9px] font-bold text-slate-500 tracking-tighter">{item.time}</span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-primary/40">
            {item.phase}
          </span>
        </div>
        <h4 className="text-base font-black text-slate-950 leading-tight mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-[13px] leading-relaxed text-slate-500 font-medium">
          {item.content}
        </p>
      </div>
    </div>
  );
}

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="relative overflow-hidden bg-white py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-graph-paper opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      {/* Vertical Tech Text */}
      <div className="absolute top-1/4 -right-8 font-mono text-[8px] text-primary/10 tracking-[1em] select-none pointer-events-none rotate-90 uppercase">
        Continuous_Deployment_System
      </div>

      <div className="relative z-10 mx-auto max-w-[540px] px-6">
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black tracking-[0.4em] text-primary uppercase">Itinerary</span>
            <div className="h-1 w-12 bg-primary/20 rotate-1" />
          </div>
          <h2 className="mb-20 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
            2日間で駆け抜ける
            <br />
            <span className="relative inline-block mt-2">
              アプリ開発の全貌。
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </FadeIn>

        {/* Day 1 Block */}
        <div className="mb-24 relative">
          <FadeIn>
            <div className="mb-12 relative inline-block">
              {/* Taped Look Header */}
              <div className="relative z-10 bg-white border border-slate-200 px-6 py-2 -rotate-1 shadow-sm">
                <span className="font-bebas text-4xl text-primary leading-none">DAY 01</span>
              </div>
              <div className="absolute top-0 right-0 -mr-4 -mt-2 h-4 w-12 bg-primary/10 rotate-12 blur-[1px]" />
              <div className="absolute bottom-0 left-0 -ml-4 -mb-2 h-4 w-12 bg-primary/10 -rotate-12 blur-[1px]" />
            </div>
            <div className="space-y-4 border-l-2 border-dashed border-slate-100 ml-6">
              {day1.map((item, i) => (
                <CurriculumItem key={i} item={item} />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Day 2 Block */}
        <div className="relative">
          <FadeIn delay={200}>
            <div className="mb-12 relative inline-block">
              {/* Taped Look Header */}
              <div className="relative z-10 bg-white border border-slate-200 px-6 py-2 rotate-1 shadow-sm">
                <span className="font-bebas text-4xl text-primary leading-none">DAY 02</span>
              </div>
              <div className="absolute top-0 left-0 -ml-4 -mt-2 h-4 w-12 bg-primary/10 45 rotate-12 blur-[1px]" />
              <div className="absolute bottom-0 right-0 -mr-4 -mb-2 h-4 w-12 bg-primary/10 45 -rotate-12 blur-[1px]" />
            </div>
            <div className="space-y-4 border-l-2 border-dashed border-slate-100 ml-6">
              {day2.map((item, i) => (
                <CurriculumItem key={i} item={item} />
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={500}>
          <div className="mt-20 rounded-[32px] bg-white border border-slate-100 p-8 text-center shadow-sm">
            <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
              ※ 技術の進化に合わせて、
              <br />
              最新のツールや手法に最適化されます。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
