import PaginationButtons from "@/components/shared/PaginationButtons";
import { Spinner } from "@/components/shared/Spinner";

export default function EndpointsLayout({ isLoading, prevPage, nextPage, items, renderItem, fetchData }) {

    return (
        <div className="flex flex-1 flex-col">
            {isLoading
                ?(<Spinner size="large" className="text-[var(--cardBackground)]" />)
                :(
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                            {items.map(renderItem)}
                        </div>
                        <PaginationButtons getData={fetchData} prevPage={prevPage} nextPage={nextPage} />
                    </>
                )
            }
        </div>
    );
}