import { IFitlog } from "@/types/fitlog.type";
import LibraryCard from "../shared/LibraryCard";

// Creating Promise To Fetch Data
const getFitlogData = async () => {
    try{

        const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {'next' : {'revalidate' : 600}});

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return res.json();

    } catch(err) {
        console.log('Fetch Error Occured', err);

        return [];
    } 
}

async function Library() {

    const fitlogAllData: IFitlog[] = await getFitlogData();

    return (
        <section>
            {/* Section Title */}
            <div>
                <h2 className="text-3xl">The Library</h2>
                <p className="mt-2">Twelve lifts covering every major muscle group.</p>
            </div>

            {/* Library Items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    fitlogAllData.map(
                        data => <LibraryCard key={data.id} data={data} />
                    )
                }
            </div>
        </section>
    );
}

export default Library