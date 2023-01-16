import {useMemo} from "react";
import moment from "moment";

export const useSortedCards = (dataCards, querySort, sortDirection) => {
    return useMemo(() => {
        return dataCards.sort((a, b) => {
            if (sortDirection === "true") {
                [a, b] = [b, a]
            }
            if (a[querySort] > b[querySort]) {
                return 1;
            }
            if (a[querySort] < b[querySort]) {
                return -1;
            }
            return 0;
        })
    }, [dataCards, querySort, sortDirection])


}
export const useSortedAndSearchedCards = (dataCards, filter) => {
    const sortedDataCards = useSortedCards(dataCards, filter.querySort, filter.sortDirection)
    return useMemo(() => {
        if (filter.selectedSearch === "create_data" || filter.selectedSearch === "expire_date") {
            return sortedDataCards.filter(card => moment(new Date(card[filter.selectedSearch])).format("LLL").toString().toLocaleLowerCase().includes(filter.querySearch))
        }
        return sortedDataCards.filter(card => card[filter.selectedSearch].toString().includes(filter.querySearch))
    }, [filter, sortedDataCards])
}

