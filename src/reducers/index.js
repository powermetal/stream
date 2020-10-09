import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { streamReducer } from './streamReducer';
import { authReducer } from "./authReducer";

export default combineReducers ({
   form: formReducer,
   streams: streamReducer,
   auth: authReducer
});