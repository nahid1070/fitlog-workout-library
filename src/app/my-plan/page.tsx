'use client';

import NoFitData from "@/components/my-plan/NoFitData";
import SavedPlanCard from "@/components/my-plan/SavedPlanCard";
import TodaysPlanCard from "@/components/my-plan/TodaysPlanCard";
import { FitLibraryContext } from "@/contexts/FitLibraryContext";
import { useContext, useState } from "react";

function MyPlan() {

    // Declaring State to handle the TodaysPlan and Saved Data
    const [tab, setTab] = useState('plan');

    // Using Context to get the MyPlan and Save data
    const {plan, save} = useContext(FitLibraryContext);

    // Get the Total Duration and Calories From the Plan Data
    const totalMinutes = plan.reduce( (acc, data) => acc + data.duration, 0);
    const totalCalories = plan.reduce( (acc, data) => acc + data.caloriesBurned, 0);

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
            <div className="stats stats-vertical lg:stats-horizontal shadow-none w-full bg-surface rounded-2xl border border-brand-border">
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value text-brand-primary">{plan.length}</div>
                   
                </div>

                <div className="stat">
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">{totalMinutes}</div>
                  
                </div>

                <div className="stat">
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">{totalCalories}</div>
                    
                </div>
            </div>

            {/* Todays Plan and Saved Details */}
            <div className="flex items-center justify-between gap-4">
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
                    Sorting
                </div>
            </div>

            <div className="space-y-4">
    
                {

                    // If Saved Data is Available
                    tab === 'saved' && hasSaved > 0 ?
                        save.map( savedPlan => 
                        <SavedPlanCard key={savedPlan.id} savedPlan={savedPlan} />

                    ) : 
                    // If it's saved tab and not data is available
                    tab !== 'plan' && <NoFitData /> 
                }

                {
                    // If TodaysPlan Data is Available
                    tab === 'plan' && hasPlan > 0 ?
                        plan.map( todaysPlan => 
                        <TodaysPlanCard key={todaysPlan.id} todaysPlan={todaysPlan} />

                    ) : 
                    
                    // If it's plan tab and not data is available
                    tab !== 'saved' && <NoFitData /> 
                }

            </div>

        </section>
   );
}

export default MyPlan