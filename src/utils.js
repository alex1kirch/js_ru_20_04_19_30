import {OrderedMap} from 'immutable'

export function arrayToMap(arr, RecordModel, map) {
    return arr.reduce((acc, el) => acc.set(el.id, RecordModel ? new RecordModel(el) : el), map ? map : new OrderedMap({}))
}

export function mapToArr(obj) {
    return obj.valueSeq().toArray()
}