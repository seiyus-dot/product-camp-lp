import FadeIn from "./FadeIn";

const features = [
  {
    titleLines: [
      "AIツールの使い方ではなく",
      "「作り方」を学ぶ"
    ],
    description: "プロンプトを入力するだけの作業者ではなく、アプリの構造を定義し、AIを使いこなす「設計者」としての視点を養います。",
    id: "01",
    label: "LEARN HOW TO BUILD",
    image: "/images/concept-01.png",
  },
  {
    titleLines: [
      "Webアプリの仕組みを",
      "体で理解する"
    ],
    description: "UIの裏側の処理はどうなっているのか？ データはどこに保存されるのか？ 手を動かして作ることで、仕組みが明確に理解できます。",
    id: "02",
    label: "UNDERSTAND SYSTEMS",
    image: "/images/concept-02.png",
  },
  {
    titleLines: [
      "2日目の最後には",
      "世界中に公開できる"
    ],
    description: "ローカル環境で動くだけでは不十分。GitHubとVercelを使い、その場でURLを発行。世界中からアクセスできる状態にします。",
    id: "03",
    label: "PUBLISH GLOBALLY",
    image: "/images/concept-03.png",
  },
  {
    titleLines: [
      "AIがあなたの代わりに",
      "伴走・構築する"
    ],
    description: "コードの書き方が分からなくても、AIがリアルタイムに実装を担当。あなたは設計図を描き、AIにフィードバックするだけです。",
    id: "04",
    label: "AI-DRIVEN DEVELOPMENT",
    image: "/images/concept-04.png",
  },
];

export default function WhySection() {
  return (
    <section className="relative overflow-hidden bg-white py-32 pb-40">
      {/* Background Dots - matching PainPointSection */}
      <div className="absolute inset-0 bg-[#fdfdfd] dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[540px] px-6">
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black tracking-[0.4em] text-primary uppercase">Our Concept</span>
            <div className="h-1 w-12 bg-primary/20 rotate-1" />
          </div>
          <h2 className="mb-20 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
            AIに指示するだけで、
            <br />
            <span className="relative inline-block mt-2">
              本物のアプリが完成する。
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-24">
          {features.map((feature, i) => {
            const rotation = i % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]";
            const accentColors = [
              "bg-indigo-600",
              "bg-yellow-400",
              "bg-pink-500",
              "bg-emerald-500"
            ];

            return (
              <FadeIn key={i} delay={i * 100}>
                <div className={`relative ${rotation} transition-transform hover:rotate-0 duration-500`}>
                  {/* ID Label - "Taped" Look (outside overflow-hidden to prevent clipping) */}
                  <div className="absolute -top-3 left-8 z-30 h-7 px-4 bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm -rotate-2 flex items-center justify-center">
                    <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                      PHASE_{feature.id}
                    </span>
                  </div>

                  {/* Memo Paper Container */}
                  <div className="relative overflow-hidden rounded-sm border border-slate-100 bg-white p-8 shadow-[15px_15px_40px_rgba(0,0,0,0.03)] ring-1 ring-black/5">

                    <div className="flex flex-col gap-10">
                      {/* Visual Area - Tilted Polaroid Style */}
                      <div className="relative mx-auto w-full max-w-[280px]">
                        <div className={`absolute -inset-1 ${accentColors[i % 4]} opacity-20 blur-xl rounded-full`} />
                        <div className="relative overflow-hidden rounded-[20px] aspect-[4/3] border-8 border-white shadow-2xl rotate-2 transition-transform group-hover:rotate-0">
                          <img
                            src={feature.image}
                            alt={feature.label}
                            className="h-full w-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="text-center px-4">
                        <span className="mb-4 inline-block font-mono text-[9px] font-bold tracking-[0.3em] text-primary uppercase px-3 py-1 bg-primary/5 rounded-full">
                          {feature.label}
                        </span>
                        <h3 className="mb-4 text-2xl font-black text-slate-950 leading-tight flex flex-col items-center">
                          {feature.titleLines.map((line, lineIndex) => (
                            <span key={lineIndex} className="block whitespace-nowrap">{line}</span>
                          ))}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-slate-600 font-medium">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Hand-drawn element hint */}
                    <div className="mt-10 flex justify-center">
                      <div className="h-px w-16 bg-slate-100" />
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
