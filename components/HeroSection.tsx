"use client";

import FadeIn from "./FadeIn";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#fdfdfd] pt-32 pb-24">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-graph-paper opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 flex flex-col items-center mt-6">

        {/* Text Content (Centered) */}
        <div className="flex flex-col items-center text-center w-full max-w-3xl">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
              <span className="flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              </span>
              <span className="font-mono text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                Product AI Camp
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="mb-6 mx-auto max-w-4xl text-center">
              <span className="text-[clamp(24px,7vw,42px)] md:text-[46px] lg:text-[56px] font-black leading-[1.3] md:leading-[1.4] tracking-tight text-slate-900 drop-shadow-sm flex flex-col items-center">
                <span>コードを一切書かずに、</span>
                <span><span className="text-primary pr-1">2日間</span>でアプリを作る。</span>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-[clamp(13px,3.8vw,16px)] sm:text-[17px] font-bold leading-[1.8] sm:leading-[1.8] text-slate-500 max-w-xl mx-auto px-4">
              <span className="inline-block">AIと対話するだけで、</span><span className="inline-block">あなたのアイデアが「動くプロダクト」に。</span><br className="hidden sm:block" />
              <span className="inline-block">専門知識は一切不要。</span><span className="inline-block">プロンプトと設計の術だけを</span><span className="inline-block">身につける超実践型キャンプ。</span>
            </p>
          </FadeIn>
        </div>

        {/* Illustration Area */}
        <div className="w-full max-w-4xl relative mt-2 sm:mt-8 mb-4 sm:mb-12">
          <FadeIn delay={300}>
            <div className="relative w-full aspect-[5/4] sm:aspect-[16/9] lg:aspect-[21/9] flex items-center justify-center">
              {/* Decorative aura behind illustration */}
              <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full scale-[1.3]" />

              {/* 
                radial-gradient is used for WebkitMaskImage to fade out 
                all four edges (top, bottom, right, left) smoothly.
              */}
              <img
                src="/images/hero-illustration.png"
                alt="AI App Building Illustration"
                className="relative z-10 w-full h-[115%] sm:h-[130%] lg:h-[150%] object-contain mix-blend-multiply opacity-95 transition-transform duration-1000 ease-in-out hover:scale-105"
                style={{
                  animation: 'slow-float 6s ease-in-out infinite',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)',
                  maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)'
                }}
              />
            </div>
          </FadeIn>
        </div>

        {/* CTA Area (Below Image) */}
        <div className="flex flex-col items-center w-full">
          <FadeIn delay={400}>
            <div className="flex flex-col items-center gap-5">
              <a
                href="#apply"
                className="shimmer-container shadow-2xl shadow-accent/20 inline-flex h-16 w-full sm:w-auto min-w-full sm:min-w-[320px] items-center justify-center gap-2 rounded-xl bg-accent hover:bg-accent-hover px-10 py-5 text-[16px] sm:text-[18px] font-black text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                今すぐ入会する
              </a>

              <div className="flex items-center justify-center gap-2 px-2 bg-white/50 backdrop-blur-sm border border-slate-100 py-2 px-4 rounded-full shadow-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[12px] font-bold text-slate-500">
                  卒業後も安心の<span className="text-primary ml-1">月額サポートコミュニティ完備</span>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style jsx>{`
        @keyframes slow-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
}
