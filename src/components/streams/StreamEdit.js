import React from 'react';
import StreamForm from "./StreamForm";
import {connect} from 'react-redux';
import {editStream, fetchStream} from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(formValues, this.props.match.params.id)
    };

    render() {
        return (
            <div>
                <StreamForm
                    initialValues={
                        {
                            title: this.props.stream ? this.props.stream.title : '',
                            description: this.props.stream ? this.props.stream.description : ''}
                    }
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        stream: state.selectedStream
    }
}

export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit);

