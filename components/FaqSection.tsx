"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

interface FaqItem {
  q: string;
  a: string;
}

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0 relative">
      {/* Decorative dot for tech feel */}
      <div className={`absolute top-8 left-0 h-1.5 w-1.5 rounded-full transition-colors duration-300 ${open ? 'bg-primary' : 'bg-slate-200'}`} />

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start gap-4 py-6 pl-5 text-left transition-colors hover:text-primary"
      >
        <span className="mt-0.5 shrink-0 text-sm font-black text-primary font-mono tracking-tighter">
          Q.
        </span>
        <span className="flex-1 text-[15px] font-bold text-slate-900 leading-snug">{item.q}</span>
        <svg
          className={`mt-1 h-5 w-5 shrink-0 text-slate-300 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="flex items-start gap-4 pl-5 pr-4 relative">
            <span className="shrink-0 text-sm font-black text-primary/40 font-mono tracking-tighter">
              A.
            </span>
            <p className="text-[14px] font-medium leading-relaxed text-slate-600">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const faqGroups = [
    {
      title: "「本当に？」——懐疑への回答",
      items: [
        {
          q: "本当にコードを一切書かずにアプリが作れるんですか？",
          a: 'はい。あなたがやるのは「何を作るか」を決めて設計図を描くことです。実装はAIが担います。プログラミング言語の文法やフレームワークを覚える必要はありません。',
        },
        {
          q: "2日間で作ったものは、本当に人に見せられるクオリティですか？",
          a: "はい。実際にURLを持ち、スマホやPCからアクセスできる状態で公開します。「え、これ自分で作ったの？」と言われるレベルには到達します。",
        },
        {
          q: "AIが作ったものって、すぐ壊れたりしませんか？",
          a: "設計図なしにAIに指示を出すと、エラーが連鎖して壊れやすくなります。Product Campでは構造化メソッドで設計図を先に作るため、安定したプロダクトに仕上がります。",
        },
        {
          q: "プログラミング経験がまったくなくても大丈夫ですか？",
          a: "はい。むしろプログラミング経験がない方のためのプログラムです。必要なのは「こんなもの作りたい」というアイデアだけです。",
        },
        {
          q: "サポートコミュニティはいつまで続けるべきですか？",
          a: "月額制なので、必要な間だけ続けてください。自走できるようになったらいつでも解約できます。",
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[#fdfdfd] dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[540px] px-6">
        <FadeIn>
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black tracking-[0.4em] text-primary uppercase">FAQ</span>
            <div className="h-1 w-12 bg-primary/20 rotate-[-2deg]" />
          </div>
          <h2 className="mb-20 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
            よくある質問
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative group">
            {/* Taped Look Header */}
            <div className="absolute -top-3 left-8 z-20 bg-white border border-slate-200 px-4 py-1.5 rotate-1 shadow-sm">
              <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase">SYSTEM_QA_LOG</span>
            </div>

            <div className="relative rounded-sm border border-slate-100 bg-white shadow-[20px_20px_60px_rgba(0,0,0,0.02)] p-6 sm:p-10 pt-16">
              {faqGroups.flatMap((group) => group.items).map((item) => (
                <FaqAccordion key={item.q} item={item} />
              ))}

              {/* Decorative Tech Hint Inside */}
              <div className="absolute bottom-4 right-6 font-mono text-[7px] text-slate-200">
                DB_QUERY_SUCCESS
              </div>
            </div>

            {/* Behind blur */}
            <div className="absolute -inset-4 bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
