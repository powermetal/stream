import React from 'react';
import StreamForm from './StreamForm';
import {connect} from 'react-redux';
import {createStream} from '../actions';


const StreamCreate = (props) => {
    const onSubmit = (formValues) => {
        props.createStream(formValues, props.userId)
    }

    return (
        <div>
            <StreamForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {createStream})(StreamCreate);