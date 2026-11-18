import Link from "next/link";

function Footer() {

    return (
        <footer className="bg-surface">
           <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    {/* Logo */}
                    <Link href={'/'} className="text-xl tracking-wide uppercase font-heading flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell preview-icon"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/></svg>
                        FitLog
                    </Link>

                    <p className="mt-4 sm:mt-0">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
           </div>
        </footer>
    );
}

export default Footer