import FadeIn from "./FadeIn";

const tools = [
    { name: "Antigravity", label: "AGENTIC AI", path: "/logos/antigravity.jpg" },
    { name: "Claude 3.7", label: "AI ENGINE", path: "/logos/claude.jpg" },
    { name: "Cursor", label: "AI EDITOR", path: "/logos/cursor.svg" },
    { name: "GitHub", label: "OPS / CI-CD", path: "/logos/github.svg" },
    { name: "Vercel", label: "HOSTING", path: "/logos/vercel.svg" },
    { name: "Firebase", label: "DATABASE", path: "/logos/firebase.svg" },
];

export default function ToolLogoSection() {
    return (
        <section className="relative bg-slate-50 py-16 border-y border-slate-100 overflow-hidden">
            {/* Subtle Overlay Gradients for smooth fade */}
            <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent" />

            <div className="relative z-0">
                <FadeIn>
                    <p className="mb-12 text-center text-xs font-black tracking-[0.4em] text-primary uppercase">
                        次世代の武器を、その手に。
                    </p>

                    {/* Marquee Container */}
                    <div className="flex overflow-hidden select-none">
                        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-16 py-6">
                            {[...tools, ...tools].map((tool, i) => (
                                <div key={i} className="flex items-center gap-5 shrink-0">
                                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_20px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                                        <img
                                            src={tool.path}
                                            alt={tool.name}
                                            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="whitespace-nowrap">
                                        <div className="font-bebas text-xl tracking-tight text-slate-800">
                                            {tool.name}
                                        </div>
                                        <div className="text-[9px] font-black tracking-[0.2em] text-primary/60 uppercase">
                                            {tool.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
