import BannerSkeleton from "@/components/skeleton/BannerSkeleton";
import ProfileCardSkeleton from "@/components/skeleton/ProfileCardSkeleton";

function Loading() {

    return (
        <>
        <div>
            <BannerSkeleton />
            <div className="grid grid-cols-3 gap-4 py-8">
                <ProfileCardSkeleton />
                <ProfileCardSkeleton />
                <ProfileCardSkeleton />
                <ProfileCardSkeleton />
                <ProfileCardSkeleton />
                <ProfileCardSkeleton />
            </div>
        </div>
        </>
    );
}


export default Loading