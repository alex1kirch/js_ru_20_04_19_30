import { FILTER_ARTICLELIST_BY_ITEMS, FILTER_ARTICLELIST_BY_DATE } from '../constants'

//не очень, у тебя два источника правды - прийдется тут сразу и даления/добавления и тд обрабатывать
export default (filters = { byDate: { from: null, to: null }, byItems: { selection: [] } }, action) => {
    const { type, payload } = action
    
    switch (type) {
        case FILTER_ARTICLELIST_BY_DATE:
            const { from, to } = payload;
            return { byDate: { from, to }, byItems: {...filters.byItems} };
        case FILTER_ARTICLELIST_BY_ITEMS:
            const { selection = [] } = payload;
            return { byItems: { selection }, byDate: {...filters.byDate} };
    }

    return filters
}
