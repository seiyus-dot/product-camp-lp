import FadeIn from "./FadeIn";
import CtaButton from "./CtaButton";

export default function MidCta({ message }: { message: string }) {
  return (
    <section className="relative overflow-hidden bg-primary/5 py-12">
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-sm px-6 text-center">
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black tracking-[0.4em] text-primary uppercase">Next Step</span>
            <div className="h-1 w-12 bg-primary/20 rotate-1" />
          </div>
          <p className="mb-8 text-xl font-black leading-[1.4] text-slate-950">
            {message}
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <CtaButton compact />
        </FadeIn>
      </div>
    </section>
  );
}
