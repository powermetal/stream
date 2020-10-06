import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { createStream } from '../actions';


const StreamCreate = (props) => {
    const onSubmit = (formValues) => {
        props.createStream(formValues)
    }

    return (
        <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
            <Field name="title" component={renderInput} label="Enter a title:"/>
            <Field name="description" component={renderInput} label="Enter a description:"/>
            <button className="ui button primary" type="submit">Submit</button>
        </form>
    );
};

const renderInput = ({input, meta, label}) => {
    const error = meta.touched && meta.error ? <div className="ui message error">
        <div className="header">{meta.error}</div>
    </div> : null;
    return (
        <div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            {error}
        </div>
    );
};

const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.title)
        errors.title = 'Title is required';
    if (!formValues.description)
        errors.description = 'Description is required';
    return errors;
};

export default connect(null, {createStream})(reduxForm({
    form: 'streamCreate',
    validate: validateForm
})(StreamCreate));

