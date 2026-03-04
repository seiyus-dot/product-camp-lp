import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-[100] mx-auto w-full max-w-[540px] px-5 pt-6 pointer-events-none">
            <div className="flex h-14 items-center justify-between rounded-2xl border border-white/20 bg-white/80 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-3xl pointer-events-auto ring-1 ring-black/5">
                <Link href="/" className="flex items-center gap-2 pl-2">
                    <span className="font-bebas text-xl tracking-tighter text-slate-950">
                        PRODUCT AI CAMP
                    </span>
                </Link>

                <Link
                    href="#apply"
                    className="flex h-10 items-center justify-center rounded-xl bg-accent hover:bg-accent-hover px-6 active:scale-95 transition-all shadow-[0_4px_12px_var(--color-accent)]/30"
                >
                    <span className="text-[11px] font-black tracking-widest text-white uppercase mt-0.5">
                        今すぐ入会する
                    </span>
                </Link>
            </div>
        </header>
    );
}
