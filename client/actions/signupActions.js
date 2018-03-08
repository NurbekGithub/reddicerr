import axios from 'axios';

export function userSignupRequest(ud) {
  return function dispatch() {
    return axios.post('/api/users', ud);
  }
}