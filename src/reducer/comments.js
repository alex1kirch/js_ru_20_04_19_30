import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS } from '../constants'
import { arrayToMap } from '../utils'
import { Map, OrderedMap, Record } from 'immutable'

const CommentModel = Record({
    id: null,
    text: "",
    user: "",
})

//давай комменты хранить в такой же структуре, как и статьи. Иначе быстро запутаешься
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
            //каждый раз перезатераешь комменты, используй merge
            return arrayToMap(response, CommentModel, comments)
    }

    return comments
}
