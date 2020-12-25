import React from "react";
import { connect } from 'react-redux'
import { signIn , signOut } from '../actions'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "287872445111-dtrcjd9qh311agkl6ldb54c32kl7f8su.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get()) 
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignIn) => {
    if (isSignIn) {
      return this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      return this.props.signOut()
    }
  };
  renderAuthButton() {
    if (this.props.isSignedIn=== null) {
      return null;
    } else if (this.props.isSignedIn=== true) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
  
  onSignIn  = () => {
    this.auth.signIn();
  };
  
  onSignOut = () => {
    this.auth.signOut();
  };


  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth2.isSignedIn} 
}

export default connect(mapStateToProps, { signIn , signOut})(GoogleAuth);
