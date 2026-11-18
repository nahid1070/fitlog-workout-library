import Link from "next/link";

function NoFitData() {

    return (
        <div className="bg-surface rounded-2xl border-dashed border-brand-border p-10 text-center">
            <h2 className="text-lg">Nothing here yet</h2>
            <p className="mt-2">Browse the library and add a lift to get today moving.</p>
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

export default NoFitData