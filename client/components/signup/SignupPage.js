import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component {

  render() {
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <SignupForm 
            userSignupRequest={this.props.userSignupRequest}
            history={this.props.history}
            addFlashMessage={this.props.addFlashMessage}
          />
        </div>
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);