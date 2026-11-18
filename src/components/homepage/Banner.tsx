import Image from "next/image";

function Banner() {

    return (
        <section className="grid lg:grid-cols-2 items-center gap-10 bg-[#1a1d23] border-brand-border rounded-2xl p-8 lg:p-12">
            <div className="space-y-5">
                <p className="font-heading text-sm uppercase text-brand-primary!">Workout Library</p>
                <h1 className="text-4xl sm:text-5xl leading-tight">Train with intent. Log every set.</h1>
                <p className="max-w-md text-brand-text">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into {"today's"} plan, and watch the {"week's"} work add up.</p>
                <button className="btn bg-brand-primary text-btn-brand-text rounded-2xl">Browse Workouts</button>
            </div>

            <div>
                <div>
                    <Image src={'/assets/images/banner.png'} width={500} height={400} alt="Banner Image"/>
                </div>
            </div>
        </section>
    );
}

export default Banner