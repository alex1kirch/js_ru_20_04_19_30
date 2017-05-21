import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'

// TODO: move to Map
const commentMap = defaultComments.reduce((acc, comment) => ({
    ...acc, [comment.id]: comment
}), {})

export default (comments = commentMap, action) => {
    const {type, payload, newId} = action
    switch (type) {
        case ADD_COMMENT:
            const { user, text } = payload
            comments[newId] = { user, text, id: newId }
            return { ...comments };
    }

    return comments
}
