import React from 'react';
import {Field, reduxForm} from 'redux-form';

const StreamCreate = () => {
    const renderInput = ({ input }) => {
        console.log(input);
        return <input {...input} />
    }

    return (
            <form className="ui form">
                <div className="field">
                    <label htmlFor="title">Enter a title</label>
                    <Field name="title" component={renderInput} />
                </div>
                <div className="field">
                    <label htmlFor="description">Enter a description</label>
                    <Field name="description" component={renderInput} />
                </div>
                <button className="ui button primary" type="submit">Submit</button>
            </form>
    );
};

export default reduxForm({form: 'streamCreate'})(StreamCreate)