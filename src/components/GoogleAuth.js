import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                'clientId': '311738580140-qp0mvfgb73ctb1a3sra03k1k3ir752t0.apps.googleusercontent.com',
                'scope': 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    };

    onAuthChange = (isSignedIn) => {
        if (isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId());
        else
            this.props.signOut();
    };

    onSignInClick = () => {
        if (this.auth)
            this.auth.signIn();
    };

    onSignOutClick = () => {
        if (this.auth)
            this.auth.signOut();
    };

    renderButton = () => {
        if (this.props.isSignedIn === null)
            return <div></div>
        if (this.props.isSignedIn) {
            return (
                <button className="ui google plus button" onClick={this.onSignOutClick} >
                    <i className="google icon"/>
                    Sign out
                </button>
            )
        } else {
            return (
                <button className="ui google plus button" onClick={this.onSignInClick}>
                    <i className="google icon"/>
                    Sign in with Google
                </button>
            )
        }
    };

    render() {
        return (
            <div>
                {this.renderButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
