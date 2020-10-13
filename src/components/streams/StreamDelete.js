import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux';
import {fetchStream} from "../../actions";
import {deleteStream} from "../../actions";
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderButtons() {
        const id = this.props.match.params.id
        return (
            <React.Fragment>
                <div className="ui negative button" onClick={() => this.props.deleteStream(id)}>Delete</div>
                <Link to={"/"} className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    render() {
        return (
            <Modal
                header="Delete Stream"
                content={`Are you sure you want to delete the stream titled: "${this.props.stream ? this.props.stream.title : ""}"`}
                actions={this.renderButtons()}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stream: state.selectedStream
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
