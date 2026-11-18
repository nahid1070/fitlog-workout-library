'use client';

import { FitLibraryContext } from "@/contexts/FitLibraryContext";
import { IFitlog } from "@/types/fitlog.type";
import { Bookmark, CalendarPlus } from "lucide-react";
import { useContext } from "react";
import toast from "react-hot-toast";

interface LibraryDetailButtonProps {
    fitItemDetails: IFitlog;
}


function LibraryDetailButton({ fitItemDetails } : LibraryDetailButtonProps) {

    // Distructuring Context
    const {plan, setPlan, save, setSave} = useContext(FitLibraryContext);


    // Add To Plan Button Handler -- To store MyPlan data
    const addToPlanButtonHandler = () => {

        //Checking the exist data
        const exist = plan.find( data => data.id === fitItemDetails.id );

        // If plan is more than 5 items
        const planLimit = plan.length === 5;

        // Exist and Limit validation
        if ( exist || planLimit ) {

            // Display a Notification when Limit Over
            if (planLimit) {
                toast.error(`Today's plan is full — finish these first!`);
                return [];
            }

            // Display a Notification when added
            if (exist) {
                toast.error(`Already in your plan`);
                return [];
            }
           
        }

        // Adding plans to the MyPlan
        setPlan(prevPlan => [...plan, fitItemDetails]);
        // Display a Notification when added
        toast.success(`Added to today's plan`);
        
    }

    // SaveForLater Button Handler -- To store SaveForLater data
    const saveLaterButtonHandler = () => {

        // Checking the exist data
        const exist = save.find( data => data.id === fitItemDetails.id );

        // Return if the data already exist
        if (exist) {

            toast.error(`Already in your saved list`);
            return 0;
        }

        // Saving Items
        setSave(prevSave => [...save, fitItemDetails]);

        // Display a Notification when added
        toast.success(`Saved for later`);
    }

    return (
        <>
        {/* Add To Plan Button */}
        <button
            onClick={ ()=> addToPlanButtonHandler() }
            className="btn btn-block bg-brand-primary text-btn-brand-text rounded-2xl hover:bg-brand-accent sm:w-fit sm:btn-md">
            <CalendarPlus className="text-btn-brand-text w-4" /> Add to {`today's`} plan
        </button>

        {/* Save for Later Button */}
        <button 
            onClick={ () => saveLaterButtonHandler() }
            className="btn btn-block rounded-2xl btn-outline sm:w-fit  sm:btn-md">
            <Bookmark className="text-brand-heading w-4" /> Save for later
        </button>
        </>
    );
}

export default LibraryDetailButton