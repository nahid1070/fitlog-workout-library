import { IFitlog } from "@/types/fitlog.type";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface LibraryCardProps {
    data: IFitlog;
}

function LibraryCard({ data } : LibraryCardProps) {

    const {id, name, image, equipment, muscleGroups, duration, caloriesBurned, rating} = data;

    return (
        <Link href={`/${id}`} className="card bg-surface rounded-2xl border border-transparent transition-all duration-300 ease-in-out hover:border-brand-primary">
            <figure>
                <Image src={image} width={400} height={200} className="h-48 object-cover" alt="FIt Item"/>
            </figure>
            <div className="card-body gap-3 p-5">
                <div className="flex gap-2">
                    {muscleGroups.slice(0,2).map( (muscleGroup, idx) => <div key={idx} className="badge badge-success bg-brand-primary border-0 badge-sm rounded-2xl">{muscleGroup}</div> )}
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{equipment}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-1"><Clock color="#c4f000" className="w-4" />{duration}</span>
                    <span className="inline-flex items-center gap-1"><Flame color="#c4f000" className="w-4" />{caloriesBurned}</span>
                    <span className="inline-flex items-center gap-1"><Star color="#c4f000" className="w-4" />{rating}</span>
                </div>
            </div>
        </Link>
    );
}

export default LibraryCard