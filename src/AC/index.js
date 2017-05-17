import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLELIST_BY_DATE, FILTER_ARTICLELIST_BY_ITEMS } from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload : { id }
    }
}

export function filterArticleListByDate({from, to}) {
    return {
        type: FILTER_ARTICLELIST_BY_DATE,
        payload : { from, to }
    }
}

export function filterArticleListbyItems(selection) {
     return {
        type: FILTER_ARTICLELIST_BY_ITEMS,
         payload : { selection }
    }
}