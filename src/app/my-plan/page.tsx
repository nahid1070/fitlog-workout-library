'use client';

import NoFitData from "@/components/my-plan/NoFitData";
import SavedPlanCard from "@/components/my-plan/SavedPlanCard";
import TodaysPlanCard from "@/components/my-plan/TodaysPlanCard";
import { FitLibraryContext } from "@/contexts/FitLibraryContext";
import { IFitlog } from "@/types/fitlog.type";
import { useContext, useState } from "react";

function MyPlan() {

    // Declaring State to handle the TodaysPlan and Saved Data
    const [tab, setTab] = useState('plan');

    // Using Context to get the MyPlan and Save data
    const {plan, setPlan, save, setSave} = useContext(FitLibraryContext);

    // Declaring State to handle Sorting data
    const [sortBy, setSortedBy] = useState<'duration' | 'calories' | 'rating'>('duration');

    // Sort Logic
    const sortingMyPlan = (myplans: IFitlog[]) => {

        const sortedData = [...myplans];
        
        if ( sortBy === 'duration' ) {
            sortedData.sort( (a, b) => a.duration - b.duration ); 

        } else if ( sortBy === 'calories' ) {
            sortedData.sort( (a, b) => a.caloriesBurned - b.caloriesBurned );

        } else if ( sortBy === 'rating' ) {
            sortedData.sort( (a, b) => b.rating - a.rating );
        }

        return sortedData;
        
    }

    // Storing Sorted Plan Data
    const sortedPlans = sortingMyPlan(plan);
    const sortedSave = sortingMyPlan(save);



    // Get the Total Duration and Calories From the Plan Data
    const totalPlanMinutes = plan.reduce( (acc, data) => acc + data.duration, 0);
    const totalPlanCalories = plan.reduce( (acc, data) => acc + data.caloriesBurned, 0);

    // Get the Total Duration and Calories From the Saved Data
    const totalSavedMinutes = save.reduce( (acc, data) => acc + data.duration, 0);
    const totalSavedCalories = save.reduce( (acc, data) => acc + data.caloriesBurned, 0);

    // Plan and Saved Length
    const hasPlan = plan.length;
    const hasSaved = save.length;

    // Tabs buttons handler
    const todaysPlanButtonHandler = () => {
        setTab('plan');
    }

    // Tabs buttons handler
    const savedButtonHandler = () => {
        setTab('saved');
    }


   return (
        <section className="space-y-8">
            
            {/* Title & Subtitle */}
            <div className="space-y-2">
                <h2 className="text-4xl">My Plan</h2>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            {/* Plan Stats */}
            <div className="stats stats-vertical sm:stats-horizontal shadow-none w-full bg-surface rounded-2xl border border-brand-border">
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value text-brand-primary">
                        { tab === 'saved' ? save.length : plan.length }
                    </div>
                   
                </div>

                <div className="stat">
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">
                        { tab === 'saved' ? totalSavedMinutes : totalPlanMinutes }
                    </div>
                  
                </div>

                <div className="stat">
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">
                        { tab === 'saved' ? totalSavedCalories : totalPlanCalories }
                    </div>
                    
                </div>
            </div>

            {/* Tabs Buttons - Todays Plan and Saved */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div role="tablist" className="tabs tabs-box rounded-2xl bg-surface w-fit">
                    <button
                        onClick={todaysPlanButtonHandler}
                        role="tab"
                        className={`tab rounded-2xl shadow-none ${tab === 'plan' && 'tab-active text-brand-primary bg-black'}`}>
                        {`Today's`} Plan
                    </button>

                    <button
                        onClick={savedButtonHandler} 
                        role="tab"
                        className={`tab rounded-2xl shadow-none ${tab === 'saved' && 'tab-active text-brand-primary bg-black'}`}>
                        Saved
                    </button>
                </div>

                <div>
                    <p className="text-gray-100 mb-2">Sort By</p>

                    <select
                        onChange={ (e) => setSortedBy(e.target.value as 'duration' | 'calories' | 'rating') } 
                        defaultValue="duration" 
                        className="select w-xs bg-black rounded-2xl"
                    >
                        <option value={"duration"}>Duration</option>
                        <option value={"calories"}>Calories</option>
                        <option value={"rating"}>Rating</option>
                    </select>
                    
                </div>
            </div>

            {/* Todays Plan and Saved Details */}
            <div className="space-y-4">
    
                {

                    // If Saved Data is Available
                    tab === 'saved' && hasSaved > 0 ?
                        sortedSave.map( savedPlan => 
                        <SavedPlanCard 
                            key={savedPlan.id} 
                            savedPlan={savedPlan}
                            save={save}
                            setSave={setSave} 
                        />

                    ) : 
                    // If it's saved tab and not data is available
                    tab !== 'plan' && <NoFitData /> 
                }

                {
                    // If TodaysPlan Data is Available
                    tab === 'plan' && hasPlan > 0 ?
                        sortedPlans.map( todaysPlan => 
                        <TodaysPlanCard 
                            key={todaysPlan.id} 
                            todaysPlan={todaysPlan} 
                            plan={plan} 
                            setPlan={setPlan} 
                        />

                    ) : 
                    
                    // If it's plan tab and not data is available
                    tab !== 'saved' && <NoFitData /> 
                }

            </div>

        </section>
   );
}

export default MyPlan