import { AdvancedFilters } from "@/components/shared/AdvancedFilters";
import PaginationButtons from "@/components/shared/PaginationButtons";
import { Spinner } from "@/components/shared/Spinner";

type EndpointsLayoutProps<T> = {
  isLoading: boolean;
  prevPage: string;
  nextPage: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  fetchData?: (url: string) => Promise<void>;
};

const EndpointsLayout = <T,>({ isLoading, prevPage, nextPage, items, renderItem, fetchData }: EndpointsLayoutProps<T>) => {

    return (
        <div className="flex flex-1 flex-col">
            {isLoading
                ?(
                    <div className="flex items-center justify-center min-h-screen">
                        <Spinner size="large" className="text-[var(--cardBackground)]" />
                    </div>
                )
                :(
                    <>
                        <AdvancedFilters />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                            {items.map(renderItem)}
                        </div>
                        {fetchData && <PaginationButtons getData={fetchData} prevPage={prevPage} nextPage={nextPage} />}
                    </>
                )
            }
        </div>
    );
}

export default EndpointsLayout;