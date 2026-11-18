'use client';

import { FitLibraryContext } from "@/contexts/FitLibraryContext";
import { useContext } from "react";

function MyPlan() {

    // Using Context to get the MyPlan and Save data
    const {plan, save} = useContext(FitLibraryContext);

    // Get the Total Duration and Calories From the Plan Data
    const totalMinutes = plan.reduce( (acc, data) => acc + data.duration, 0);

    const totalCalories = plan.reduce( (acc, data) => acc + data.caloriesBurned, 0);

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

        </section>
   );
}

export default MyPlan