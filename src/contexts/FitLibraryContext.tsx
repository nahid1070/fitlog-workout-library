'use client';

import { IFitlog } from "@/types/fitlog.type";
import { createContext, ReactNode, useState } from "react";

// Type for Context
export interface FitLibraryContextType {
    plan: IFitlog[] | [];
    setPlan: React.Dispatch<React.SetStateAction<IFitlog[] | []>>;
    save: IFitlog[] | [];
    setSave: React.Dispatch<React.SetStateAction<IFitlog[] | []>>;
}

// Creating Context
export const FitLibraryContext = createContext<FitLibraryContextType>({plan: [], setPlan: () => {}, save: [], setSave: () => {}});

function FitLibraryProvider({ children } : { children : ReactNode }) {

    // Declaring State to stoe MyPlan and SaveForLater data
    const [plan, setPlan] = useState<IFitlog[] | []>([]);

    const [save, setSave] = useState<IFitlog[] | []>([]);

    // State Data
    const stateData : FitLibraryContextType = {
        plan,
        setPlan,
        save,
        setSave
    }

    return (
        <FitLibraryContext.Provider value={stateData}>
            {children}
        </FitLibraryContext.Provider>
    );
}

export default FitLibraryProvider