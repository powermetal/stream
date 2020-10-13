import _ from 'lodash';
import {
    FETCH_STREAMS,
    DELETE_STREAM
} from "../actions/types";

export const streamReducer = (state={}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}