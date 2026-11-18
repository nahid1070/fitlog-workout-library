import LibraryDetailButton from "@/components/shared/libraryDetail/LibraryDetailButton";
import { IFitlog } from "@/types/fitlog.type";
import Image from "next/image";

interface ParamsProps {
    params: Promise<{ libraryId: string }>
}

// Fething Fit Item's Detail Data
const getAllFitLibraryData = async () : Promise<IFitlog[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog/');

    if (!res.ok) {
        console.log('Fetch Erro Occured', res.status);
    }

    return await res.json();
}

async function LibraryDetail({ params } : ParamsProps) {

    // Getting Fit Item ID
    const { libraryId } = await params;

    // Getting FitLog data in an array
    const fitLibraryData = await getAllFitLibraryData();

    const fitItemDetails = fitLibraryData.find( fitData => fitData.id === Number(libraryId) ) as IFitlog;


    // Distructuring the Fit Item Information
    const {

        name,
        image,
        muscleGroups,
        equipment,
        difficulty,
        duration,
        caloriesBurned,
        sets,
        reps,
        rating,
        description,
        instructions

    } = fitItemDetails;

    return (
        <>
        <div className="grid lg:grid-cols-2 gap-10">
            <div className="relative h-72 lg:min-h-72 rounded-2xl overflow-hidden">
                <Image src={image} width={1200} height={1200} alt="Fit Image" className="object-cover w-full h-full"/>
            </div>

            <div>
                <h2 className="text-4xl">{name}</h2>
                <p className="mt-4">{description}</p>

               <div className="flex flex-wrap gap-2 mt-4">
                    {
                        muscleGroups.slice(0,2).map(

                        (muscleGroup, idx) => 
                            <div 
                                key={idx} 
                                className="badge badge-success bg-brand-primary border-0 rounded-2xl">
                                {muscleGroup}
                            </div> 
                        )
                    }
                </div>
                
                {/* Fit Details */}
                <dl className="mt-6 divide-y divide-brand-border border border-brand-border bg-surface rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-2 items-center px-4 py-3">
                        <dt className="font-heading">Equipment</dt>
                        <dd>{equipment}</dd>
                    </div>

                    <div className="grid grid-cols-2 items-center px-4 py-3">
                        <dt className="font-heading">Difficulty</dt>
                        <dd>{difficulty}</dd>
                    </div>

                    <div className="grid grid-cols-2 items-center px-4 py-3">
                        <dt className="font-heading">Sets</dt>
                        <dd>{sets}</dd>
                    </div>
                    <div className="grid grid-cols-2 items-center px-4 py-3">
                        <dt className="font-heading">Reps</dt>
                        <dd>{reps}</dd>
                    </div>
                    <div className="grid grid-cols-2 items-center px-4 py-3">
                        <dt className="font-heading">Duration</dt>
                        <dd>{duration}</dd>
                    </div>
                    <div className="grid grid-cols-2 items-center px-4 py-3">
                        <dt className="font-heading">Calories</dt>
                        <dd>{caloriesBurned}</dd>
                    </div>
                    <div className="grid grid-cols-2 items-center px-4 py-3">
                        <dt className="font-heading">Rating</dt>
                        <dd>{rating}</dd>
                    </div>
                </dl>
                
                {/* Instructions */}
                <h2 className="text-2xl mt-8">Instructions</h2>

                <ol className="mt-4 list-decimal space-y-3 pl-5">
                    {
                        instructions.map(
                            (instruct, idx) => <li key={idx}>{instruct}</li>
                        )
                    }
                </ol>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                    <LibraryDetailButton fitItemDetails={fitItemDetails} />
                </div>

            </div>
        </div>
        </>
    );
}

export default LibraryDetail