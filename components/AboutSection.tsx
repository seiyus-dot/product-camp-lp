import FadeIn from "./FadeIn";

export default function AboutSection() {
  const steps = [
    {
      phase: "Day 1",
      items: ["アイデア", "設計", "超プロトタイプ"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      phase: "Day 2",
      items: ["本格構築", "公開"],
      color: "from-indigo-600 to-purple-600",
    },
    {
      phase: "月額サポート",
      items: ["改善", "収益化", "自走"],
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 pb-24">
      <div className="mx-auto max-w-sm px-6">
        <FadeIn>
          <div className="mb-4 text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase text-center">About</div>
          <h2 className="mb-12 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
            Product AI Campとは
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-6 text-[15px] leading-[1.8] text-slate-500 font-medium text-center px-4">
            <p>
              「何を作るか」を決め、「設計図」を描き、AIに構築させ、世界に公開する。
            </p>
            <p>
              この一連のプロセスを、
              <span className="font-bold text-slate-900">
                2日間で体験するプログラム
              </span>
              です。
            </p>
            <p>
              学ぶのではなく、作る。
              <br />
              インプットではなく、アウトプット。
            </p>
            <p>
              2日間の集中開発の後、
              月額のサポートコミュニティで継続的に伴走します。
            </p>
          </div>
        </FadeIn>

        {/* Flow diagram */}
        <FadeIn delay={200}>
          <div className="mt-16 space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-stretch gap-2">
                <div
                  className={`flex items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} px-4 py-3 text-xs font-bold text-white shadow-lg`}
                >
                  {step.phase}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 mb-4">
                  {step.items.map((item, j) => (
                    <span key={j} className="flex items-center gap-2">
                      <span className="rounded-lg bg-slate-50 px-3 py-1.5 text-[13px] font-bold text-slate-900">
                        {item}
                      </span>
                      {j < step.items.length - 1 && (
                        <svg
                          className="h-3 w-3 text-slate-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
