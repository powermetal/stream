import { FETCH_STREAM } from "../actions/types";

export const selectedStream = (state= null, action) => {
    switch(action.type){
        case FETCH_STREAM:
            return {...state, ...action.payload}
        default:
            return state;
    }
}