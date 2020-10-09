import React from 'react';
import {fetchStreams} from '../actions'
import {connect} from 'react-redux';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderButtons(stream) {
        if (this.props.userId === stream.userId) {
            return (
                <div>
                    <div className="ui primary button">Edit</div>
                    <div className="ui button">Delete</div>
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.streams.map((stream) => {
            return (
                <div className="card" key={stream.id}>
                    <div className="image">
                        <div className="ui placeholder">
                            <div className="square image"/>
                        </div>
                    </div>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                    <div className="extra content">
                        {this.renderButtons(stream)}
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui cards">
                    {this.renderList()}
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);
