import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignupRequest } from '../../actions/signupActions';

class SignupPage extends React.Component {

  render() {
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <SignupForm userSignupRequest={this.props.userSignupRequest} history={this.props.history}/>
        </div>
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage);