import _ from 'lodash';
import {
    FETCH_STREAMS
} from "../actions/types";

export const streamReducer = (state={}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        default:
            return state;
    }
}