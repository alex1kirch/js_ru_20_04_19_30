import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import articleListFilters from './articleListFilters'

export default combineReducers({
    counter: counterReducer,
    articles,
    articleListFilters
})