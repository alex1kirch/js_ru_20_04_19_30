export default store => next => action => {
    const { isNew } = action

    if (!isNew) {
        next(action)
        return
    }

    // http://stackoverflow.com/questions/8012002/create-a-unique-number-with-javascript-time#answer-40591207
    next({ ...action, newId: Date.now() + Math.random() });
}