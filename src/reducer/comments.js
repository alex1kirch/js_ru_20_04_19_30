import {ADD_COMMENT, LOAD_PAGE_COMMENTS, LOAD_ARTICLE_COMMENTS, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {OrderedMap, Record, Map, OrderedSet} from 'immutable'

const CommentModel = Record({
    id: null,
    text: '',
    user: ''
})

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    pages: new Map({}),
    totalOnPage: null
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentModel({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_PAGE_COMMENTS + START:
            return comments.setIn(['pages', payload.page], new OrderedSet([]))

        case LOAD_PAGE_COMMENTS + SUCCESS:
            return comments
                .set("totalOnPage", response.total)
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))
                .setIn(['pages', payload.page], new OrderedSet(response.records.map(c => c.id)));
    }

    return comments
}
