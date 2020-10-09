import streams from '../apis/streams';
import history from "../history";
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    SIGN_IN,
    SIGN_OUT
} from './types';

export const createStream = (formValues) => async dispatch => {
    const response = await streams.post('/streams', formValues);
    dispatch({type: CREATE_STREAM, payload: response.data})
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data})
};

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};
