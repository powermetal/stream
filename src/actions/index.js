import streams from '../apis/streams';
import history from "../history";
import {
    CREATE_STREAM,
    EDIT_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    SIGN_IN,
    SIGN_OUT
} from './types';

export const createStream = (formValues, userId) => async dispatch => {
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch({type: CREATE_STREAM, payload: response.data})
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data})
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data})
};

export const editStream = (formValues, id) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({type: EDIT_STREAM, payload: response.data})
    history.push('/');
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
