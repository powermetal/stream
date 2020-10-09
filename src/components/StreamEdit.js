import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {editStream, fetchStream} from '../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(formValues, this.props.match.params.id)
    };

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={renderInput} label="Enter a title:" />
                <Field name="description" component={renderInput} label="Enter a description:"
                       value="{this.props.selectedStream.description}"/>
                <button className="ui button primary" type="submit">Submit</button>
            </form>
        );
    }
}

const renderInput = ({input, meta, label}) => {
    console.log(input)
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

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        stream: state.selectedStream,
        initialValues: {
            title: state.selectedStream ? state.selectedStream.title : '',
            description: state.selectedStream ? state.selectedStream.description : ''
        }
    }
}

export default connect(mapStateToProps, {editStream, fetchStream})(reduxForm({
    form: 'streamEdit',
    validate: validateForm,
    enableReinitialize: true
})(StreamEdit));

