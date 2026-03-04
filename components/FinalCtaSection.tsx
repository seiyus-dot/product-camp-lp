import FadeIn from "./FadeIn";
import CtaButton from "./CtaButton";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-40 text-center">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-graph-paper opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      {/* Floating Aura */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] opacity-40 animate-pulse pointer-events-none" />

      {/* Tech Markers */}
      <div className="absolute top-12 left-12 font-mono text-[8px] text-primary/10 tracking-[0.5em] select-none pointer-events-none rotate-90 origin-left">
        SEQUENCE_INITIATED_00
      </div>
      <div className="absolute bottom-12 right-12 font-mono text-[8px] text-primary/10 tracking-[0.5em] select-none pointer-events-none text-right">
        PRODUCT_AI_CAMP_STABLE<br />BUILD_SUCCESSFUL
      </div>

      <div className="relative z-10 mx-auto max-w-[540px] px-6">
        <FadeIn>
          {/* Refined Taped Header */}
          <div className="mb-10 relative inline-block">
            <div className="relative z-10 bg-white border border-slate-200 px-6 py-2 -rotate-1 shadow-sm">
              <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">Ready to launch?</span>
            </div>
            <div className="absolute top-0 right-0 -mr-4 -mt-2 h-4 w-12 bg-primary/10 rotate-12 blur-[1px]" />
            <div className="absolute bottom-0 left-0 -ml-4 -mb-2 h-4 w-12 bg-primary/10 -rotate-12 blur-[1px]" />
          </div>

          <h2 className="mb-10 text-4xl font-black leading-[1.3] tracking-tight text-slate-950">
            わずか2日間で、
            <br />
            <span className="relative inline-block mt-2">
              「作れる人」に変わる。
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mb-16 text-[15px] font-bold leading-relaxed text-slate-500 max-w-[340px]">
            もう、プログラミングの壁で
            <br />
            夢を諦める必要はありません。
            <br />
            AIと設計図を武器に、
            <br />
            あなたのビジネスを爆速で実装しましょう。
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              {/* Highlight behind button */}
              <div className="absolute -inset-10 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <CtaButton />
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="h-4 w-px bg-slate-200" />
              <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                ※ 無料相談・お問い合わせも公式LINEから
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
