
function ProfileCardSkeleton() {

    return(
        <div className="flex flex-col gap-4 border border-[#15191E] rounded-2xl p-2">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    );
}


export default ProfileCardSkeleton