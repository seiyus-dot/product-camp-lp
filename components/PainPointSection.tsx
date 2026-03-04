import FadeIn from "./FadeIn";

const problems = [
  {
    title: "プログラミングが難しすぎる",
    description: "文法や環境構築、学習コストの高さに挫折してしまった経験がある。コードで止まってしまう。",
    num: "01",
    image: "/images/problem-01.png",
  },
  {
    title: "AIをアプリ開発に繋げられない",
    description: "AIツールは使っているが、それをどう実際のWebアプリに結びつけていいか分からない。",
    num: "02",
    image: "/images/problem-02.png",
  },
  {
    title: "業務のアイデアを形にできない",
    description: "社内の業務効率化や新規サービスの優れたアイデアはあるが、アウトプットの術がない。",
    num: "03",
    image: "/images/problem-03.png",
  },
];

export default function PainPointSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 pb-32">
      {/* Soft Paper-like Background */}
      <div className="absolute inset-0 bg-[#fdfdfd] dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[540px] px-6">
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Real Voices</span>
            <div className="h-1 w-12 bg-yellow-400/60 rotate-2" />
          </div>
          <h2 className="mb-16 text-center text-2xl sm:text-3xl font-black leading-tight text-slate-900 tracking-tight">
            こんな「悩み」は、
            <br />
            <span className="relative inline-block mt-2">
              お持ちではありませんか？
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-12">
          {problems.map((prob, i) => {
            // Random slight rotation for sticky note feel
            const rotation = i % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.2deg]";
            const stickyColors = [
              "bg-yellow-50 border-yellow-100",
              "bg-indigo-50 border-indigo-100",
              "bg-pink-50 border-pink-100"
            ];

            return (
              <FadeIn key={i} delay={i * 100}>
                <div className={`relative ${rotation} transition-transform hover:rotate-0 duration-300`}>
                  {/* Sticky Note Body */}
                  <div className={`relative overflow-hidden rounded-sm border-l-4 ${stickyColors[i % 3]} shadow-[8px_8px_20px_rgba(0,0,0,0.05)] p-8 pr-28`}>

                    {/* Tape Decoration */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-16 bg-white/40 border border-white/20 backdrop-blur-sm -rotate-2" />

                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-slate-400 uppercase">
                          Question {prob.num}
                        </span>
                        <div className="h-px w-8 bg-slate-200" />
                      </div>

                      <h3 className="mb-3 text-xl font-black text-slate-900 leading-tight">
                        {prob.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-slate-500 font-medium">
                        {prob.description}
                      </p>

                      {/* Handwritten-style strike-through or underline hint */}
                      <div className="mt-6 flex items-center gap-2">
                        <span className="text-[11px] font-bold text-primary/60 italic">→ これもAIで解決できる？</span>
                      </div>
                    </div>

                    {/* Revived & Polished Image Placeholder */}
                    <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-32 h-32 rotate-6 overflow-hidden rounded-2xl border-4 border-white shadow-lg grayscale-[0.3] group-hover:grayscale-0 transition-all">
                      <img
                        src={prob.image}
                        alt={prob.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Numbering Background */}
                  <div className="absolute -top-6 -right-4 pointer-events-none">
                    <span className="font-bebas text-6xl text-slate-900/5 select-none">
                      {prob.num}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Closing handwritten note */}
        <FadeIn delay={400}>
          <div className="mt-24 text-center">
            <div className="relative inline-block px-10 py-6 transform -rotate-1">
              <div className="absolute inset-0 bg-primary rounded-[20%] skew-x-3 rotate-1 opacity-10" />
              <p className="relative text-lg font-black text-primary-dark tracking-tight leading-relaxed">
                PRODUCT AI CAMP なら、その悩みすべて
                <br />
                一瞬で解決できます。
              </p>
              <div className="absolute -bottom-4 right-0">
                <svg className="w-12 h-12 text-primary animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
