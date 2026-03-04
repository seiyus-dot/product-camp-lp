import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote: "全くの未経験でしたが、2日間で自分のアイデアが形になる感動は一生忘れません。",
    author: "30代・起業準備中",
    id: "01"
  },
  {
    quote: "AIへの指示の出し方が変わるだけで、ここまで爆速で開発できるとは驚きでした。",
    author: "20代・WEBデザイナー",
    id: "02"
  },
  {
    quote: "エンジニアではない自分でも、これならサービスを立ち上げられると確信しました。",
    author: "40代・新規事業担当",
    id: "03"
  }
];

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-graph-paper opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[540px] px-6">
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black tracking-[0.4em] text-primary uppercase">Voices</span>
            <div className="h-1 w-12 bg-primary/20 rotate-1" />
          </div>
          <h2 className="mb-20 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
            受講者の声
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {testimonials.map((item, i) => {
            // Alternating slight rotations
            const rotation = i % 2 === 0 ? "rotate-[-0.8deg]" : "rotate-[0.8deg]";

            return (
              <FadeIn key={i} delay={i * 100}>
                <div className={`relative group transition-transform hover:rotate-0 duration-500 ${rotation}`}>
                  {/* Tape decoration */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 h-6 w-24 bg-white/60 border border-slate-100 backdrop-blur-sm -rotate-2 shadow-sm flex items-center justify-center font-mono text-[8px] font-bold text-slate-300 tracking-widest uppercase">
                    Verification_{item.id}
                  </div>

                  {/* Card Content */}
                  <div className="relative overflow-hidden rounded-sm border border-slate-100 bg-white p-10 pt-14 shadow-[20px_20px_60px_rgba(0,0,0,0.03)] group-hover:shadow-[30px_30px_80px_rgba(0,0,0,0.06)] transition-all">
                    {/* Quote Icon */}
                    <div className="absolute top-8 left-8 text-primary/10">
                      <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.895 14.912 16 16.017 16H19.017V11H14.017V5H22.017V16C22.017 18.761 19.778 21 17.017 21H14.017ZM2.017 21L2.017 18C2.017 16.895 2.912 16 4.017 16H7.017V11H2.017V5H10.017V16C10.017 18.761 7.778 21 5.017 21H2.017Z" />
                      </svg>
                    </div>

                    <div className="relative z-10 text-center">
                      <p className="mb-10 text-base font-bold text-slate-950 leading-loose">
                        「{item.quote}」
                      </p>

                      <div className="inline-flex items-center gap-3">
                        <div className="h-px w-4 bg-primary/20" />
                        <span className="text-[11px] font-black text-primary/40 tracking-[0.2em] uppercase">
                          {item.author}
                        </span>
                        <div className="h-px w-4 bg-primary/20" />
                      </div>
                    </div>

                    {/* Technical details in card footprint */}
                    <div className="absolute bottom-2 right-4 font-mono text-[7px] text-slate-200 select-none">
                      LOG_STATUS: VALIDATED
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}

          <FadeIn delay={400}>
            <div className="mt-20 rounded-sm border-2 border-dashed border-slate-100 p-10 py-16 flex flex-col items-center justify-center text-center opacity-60">
              <div className="mb-4 flex gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 animate-pulse" />
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 animate-pulse delay-75" />
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 animate-pulse delay-150" />
              </div>
              <p className="text-[10px] font-black text-slate-300 tracking-[0.4em] uppercase">
                More stories arriving soon
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
