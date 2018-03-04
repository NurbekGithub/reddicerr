import React from 'react';
import timezones from '../../data/timezones';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const options = Object.keys(timezones).map((item, idx) =>
      <option key={idx} value={timezones[item]}>{item}</option> 
    )
    const {username, password, passwordConfirmation, email, timezone} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our comminity!</h1>
        <div className='form-group'>
          <label className='control-label'>Username</label>
          <input 
            value={username}
            onChange={this.onChange}
            type='text'
            name='username'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label className='control-label'>Email</label>
          <input 
            value={email}
            onChange={this.onChange}
            type='email'
            name='email'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label className='control-label'>Password</label>
          <input 
            value={password}
            onChange={this.onChange}
            type='password'
            name='password'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label className='control-label'>Confirm</label>
          <input 
            value={passwordConfirmation}
            onChange={this.onChange}
            type='password'
            name='passwordConfirmation'
            className='form-control'
          />
        </div>
        <div className='form-group'>
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
        </div>

        <div className='form-group'>
          <button className='btn btn-primary btn-lg'>
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;