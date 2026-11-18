
function DetailPageSkeleton() {

    return(
        <div className="flex gap-10">
            <div className="skeleton h-[70%vh] w-1/2 rounded-2xl"></div>

            <div className="w-1/2 space-y-3">
                <div className="flex flex-col gap-4 rounded-2xl">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>

                <div className="flex flex-col gap-4 rounded-2xl">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>

                <div className="flex flex-col gap-4 rounded-2xl">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>
        </div>
    );
}


export default DetailPageSkeleton