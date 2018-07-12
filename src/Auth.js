import React from "react";
import { withRouter } from "react-router-dom";

export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }
    checkAuth() {
      if (!this.props.user) {
        const location = this.props.location;
        const redirect = location.pathname + location.search;

        this.props.history.push(`/login`);
      }
    }

    render() {
      return this.props.user ? <Component {...this.props} /> : null;
    }
  }
  const mapStateToProps = state => {
    user: state.userReducer.user;
  };

  return withRouter(AuthenticatedComponent);
}
