import { Button } from "@/components/ui/button";
import type { PaginationButtonsTypes } from "shared/store/stateStore";

const NextButton = ({ getData, nextPage = '' }: PaginationButtonsTypes) => {
    return (
        <Button className="bg-[var(--cardBackground)] mx-auto w-3/4" onClick={() => (getData(nextPage))}>
            <div>
                <p className="text-[var(--generalText)]">Next Page</p>
            </div>
        </Button>
    );
}

const PrevButton = ({ getData, prevPage = '' }: PaginationButtonsTypes) => {
    return (
        <Button className="bg-[var(--cardBackground)] mx-auto w-3/4" onClick={() => (getData(prevPage))}>
            <div>
                <p className="text-[var(--generalText)]">Previous Page</p>
            </div>
        </Button>
    );
}

const PaginationButtons = ({ getData, prevPage, nextPage }: PaginationButtonsTypes) => {
    if (!nextPage && prevPage) {
        return <PrevButton getData={getData} prevPage={prevPage} />
    }
    else if (!prevPage && nextPage) {
        return <NextButton getData={getData} nextPage={nextPage} />
    }
    else if (!prevPage && !nextPage) {
        return null;
    }
    else {
        return (
            <div className="bg-[var(--backgroundColour)] flex flex-col gap-4">
                <PrevButton getData={getData} prevPage={prevPage} />
                <NextButton getData={getData} nextPage={nextPage} />
            </div>
        );
    }
}

export default PaginationButtons;