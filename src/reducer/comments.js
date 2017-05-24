import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS } from '../constants'
import { arrayToMap } from '../utils'
import { Map, OrderedMap, Record } from 'immutable'

const CommentModel = Record({
    id: null,
    text: "",
    user: "",
})

export default (comments = new OrderedMap({}), action) => {
    const { type, payload, randomId, response } = action
    switch (type) {
        case ADD_COMMENT:
            return comments
                .set(randomId, {
                    ...payload.comment,
                    id: randomId
                });

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return arrayToMap(response, CommentModel, comments)
    }

    return comments
}
