import streams from '../apis/streams';
import history from "../history";
import {CREATE_STREAM} from './types';

export const createStream = (formValues) => async dispatch => {
    const response = await streams.post('/streams', formValues);
    dispatch({type: CREATE_STREAM, payload: response.data})
    history.push('/');
};