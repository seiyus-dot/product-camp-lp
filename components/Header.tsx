import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-[100] mx-auto w-full max-w-[540px] px-5 pt-6 pointer-events-none">
            <div className="flex h-16 items-center justify-center rounded-2xl border border-white/20 bg-white/80 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-3xl pointer-events-auto ring-1 ring-black/5">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-bebas text-4xl tracking-tighter text-slate-950 whitespace-nowrap">
                        PRODUCT AI CAMP
                    </span>
                </Link>
            </div>
        </header>
    );
}
