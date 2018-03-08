import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Validator from 'validator';

import { validateInput } from '../../../server/shared/validations/signup';
import timezones from '../../data/timezones';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state)
      .then(
        () => { 
          this.setState({isLoading: false});
          this.props.history.push('/')
        },
        ({response: {data}}) => {
          this.setState({ errors: data, isLoading: false })
        }
      )
    }
  }

  render() {
    const options = Object.keys(timezones).map((item, idx) =>
      <option key={idx} value={timezones[item]}>{item}</option> 
    )
    const {username, password, passwordConfirmation, email, timezone, errors, isLoading} = this.state;
    return (
      <form onSubmit={this.onSubmit} >
        <h1>Join our comminity!</h1>
        <TextFieldGroup 
          field='username'
          error={errors.username}
          label='Username'
          value={username}
          onChange={this.onChange}
        />
        <TextFieldGroup 
          field='email'
          error={errors.email}
          label='Email'
          type='email'
          value={email}
          onChange={this.onChange}
        />
        <TextFieldGroup 
          field='password'
          error={errors.password}
          label='Password'
          type='password'
          value={password}
          onChange={this.onChange}
        />
        <TextFieldGroup 
          field='passwordConfirmation'
          error={errors.passwordConfirmation}
          label='Confirm'
          value={passwordConfirmation}
          onChange={this.onChange}
        />
        <div className={classnames('form-group', {'has-error': errors.timezone})}>
          <label className='control-label'>Timezone</label>
          <select 
            value={timezone}
            onChange={this.onChange}
            name='timezone'
            className='form-control'
          >
            <option value='' disabled>Choose your timezone</option>
            {options}
          </select>
          {errors.timezone && <span className='help-block'>{errors.timezone}</span>}
        </div>

        <div className='form-group'>
          <button disabled={isLoading} className='btn btn-primary btn-lg'>
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;