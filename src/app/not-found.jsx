import { BicepsFlexed } from "lucide-react";
import Link from "next/link";

function NotFound() {

    return (
         <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
            <div className="border-10 border-brand-border rounded-4xl p-8">
                <BicepsFlexed size={256} color="#c4f000" strokeWidth={0.5} />
            </div>

            <h2 className="text-4xl">404 — Missed that lift</h2>
            <p className="max-w-md">The page you wanted is not in the library. Head back to the floor and pick a workout that exists.</p>

            <Link href={'/'}>
                <button 
                className="btn rounded-2xl bg-brand-primary text-black hover:bg-brand-accent mt-6"
                >
                    Go to workouts
                </button>
            </Link>
        </div>
    );
}

export default NotFound