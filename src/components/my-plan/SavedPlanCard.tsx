import { IFitlog } from "@/types/fitlog.type";
import { Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";

interface SavedPlanCardProps {
    savedPlan: IFitlog;
}

function SavedPlanCard({ savedPlan } : SavedPlanCardProps ) {

    const {

        name, 
        image, 
        equipment, 
        duration, 
        caloriesBurned, 
        rating

    } = savedPlan;

    return (
       <>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-surface p-4 rounded-2xl border border-brand-border">
            {/* Image */}
            <div className="relative w-full sm:w-36 h-28 overflow-hidden rounded-2xl">
                <Image 
                    src={image} 
                    width={200} 
                    height={200} 
                    alt="Plan Item Image"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Details */}
            <div className="flex-1">
                <h2 className="text-xl">{name}</h2>
                <p>{equipment}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm mt-2">
                    <span 
                        className="inline-flex items-center gap-1">
                            <Clock color="#c4f000" className="w-4" />{duration} min
                    </span>
                    <span 
                        className="inline-flex items-center gap-1">
                            <Flame color="#c4f000" className="w-4" />{caloriesBurned} kcal
                    </span>
                    <span 
                        className="inline-flex items-center gap-1">
                            <Star color="#c4f000" className="w-4" />{rating}
                    </span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">

                <button className="btn btn-outline rounded-2xl btn-sm">
                    View Details
                </button>

                <button className="btn rounded-2xl btn-sm bg-transparent w-10">
                    <X color="#ffffff" />
                </button>

            </div>
        </div>
       </>
    );
}

export default SavedPlanCard