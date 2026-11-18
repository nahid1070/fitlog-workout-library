'use client';

import { FitLibraryContext } from "@/contexts/FitLibraryContext";
import Link from "next/link";
import { useContext } from "react";

function NavButtons() {

    // Using Context API to Get PLAN and SAVE State Data
    const {plan, save} = useContext(FitLibraryContext);


    return (
        <>
        <Link href={'/my-plan'}>
            <button className="btn btn-ghost btn-sm rounded-[10px]">
              Plan <div className="badge badge-success bg-brand-primary border-none badge-sm">{plan.length}</div>
            </button>
        </Link>
          
        <Link href={'/my-plan'}>
            <button className="btn btn-ghost btn-sm rounded-[10px]">
            Saved <div className="badge badge-outline badge-sm">{save.length}</div>
        </button>
        </Link>
        </>
    );
}

export default NavButtons;