import FadeIn from "./FadeIn";

const day1 = [
    { time: "10:00-11:00", title: "事前講義", content: "Webアプリの全体像を図解で解説" },
    { time: "11:00-12:00", title: "環境構築", content: "AIツールをセットアップ" },
    { time: "13:00-15:00", title: "Phase 1", content: "AIに指示して画面を生成" },
    { time: "15:00-17:00", title: "Phase 2", content: "スプレッドシートDBと連携" },
];

const day2 = [
    { time: "10:00-12:00", title: "Phase 2", content: "本格DB（Firebase等）へ移行" },
    { time: "13:00-14:00", title: "Phase 3", content: "GitHubへコードを保存" },
    { time: "14:00-15:00", title: "Phase 3", content: "Vercelで世界へ公開" },
    { time: "15:00-16:00", title: "Phase 3", content: "Gemini AI機能を追加" },
    { time: "16:30-17:00", title: "発表", content: "成果シェア・振り返り" },
];

export default function TimelineSection() {
    return (
        <section className="bg-white py-20 pb-24">
            <div className="mx-auto max-w-sm px-6">
                <FadeIn>
                    <div className="mb-4 text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase text-center">Schedule</div>
                    <h2 className="mb-12 text-center text-3xl font-black leading-tight text-slate-900 tracking-tight">
                        2日間の
                        <br />
                        スケジュール
                    </h2>
                </FadeIn>

                <div className="grid gap-6 grid-cols-1">
                    {/* Day 1 */}
                    <FadeIn delay={100}>
                        <div className="rounded-[40px] border border-slate-100 bg-slate-50 p-10">
                            <div className="mb-10 flex items-baseline gap-4">
                                <span className="font-bebas text-5xl text-indigo-600">DAY 01</span>
                                <span className="text-[10px] font-bold tracking-widest text-slate-400">SATURDAY</span>
                            </div>

                            <div className="space-y-8 relative">
                                {/* Vertical line */}
                                <div className="absolute left-[3.5px] top-2 bottom-2 w-[1px] bg-slate-200" />

                                {day1.map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start relative">
                                        <div className="h-2 w-2 mt-1.5 rounded-full bg-indigo-500 shrink-0 z-10" />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-mono text-[11px] font-bold text-slate-400">{item.time}</span>
                                            <span className="text-base font-bold text-slate-900 leading-tight">{item.title}</span>
                                            <span className="text-[13px] leading-relaxed text-slate-500">{item.content}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Day 2 */}
                    <FadeIn delay={200}>
                        <div className="rounded-[40px] border border-slate-100 bg-slate-50 p-10">
                            <div className="mb-10 flex items-baseline gap-4">
                                <span className="font-bebas text-5xl text-indigo-600">DAY 02</span>
                                <span className="text-[10px] font-bold tracking-widest text-slate-400">SUNDAY</span>
                            </div>

                            <div className="space-y-8 relative">
                                {/* Vertical line */}
                                <div className="absolute left-[3.5px] top-2 bottom-2 w-[1px] bg-slate-200" />

                                {day2.map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start relative">
                                        <div className="h-2 w-2 mt-1.5 rounded-full bg-indigo-500 shrink-0 z-10" />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-mono text-[11px] font-bold text-slate-400">{item.time}</span>
                                            <span className="text-base font-bold text-slate-900 leading-tight">{item.title}</span>
                                            <span className="text-[13px] leading-relaxed text-slate-500">{item.content}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
