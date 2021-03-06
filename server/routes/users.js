import express from 'express';
import bcrypt from 'bcrypt';

import User from '../models/user'
import { commonValidation } from '../shared/validations/signup';

let router = express.Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return User.query({
    where: { email: data.email },
    orWhere: { username:data.username }
  }).fetch().then(user => {
    if(user) {
      if(user.get('username') === data.username) {
        errors.username = 'User with this username is already exist'
      }
      if(user.get('email') === data.email) {
        errors.email = 'User with this email is already exist'
      }
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    }
  });
}

router.post('/', (req, res) => {
  validateInput(req.body, commonValidation)
    .then(({errors, isValid}) => {
      if(isValid) {
        const { username, password, timezone, email } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);
        
        User.forge({
          username, timezone, email, password_digest
        }, { hasTimestamps: true }).save()
          .then(user => res.json({ success: true }))
          .catch(err => res.status(500).json({ error: err }));
    
      } else {
        res.status(400).json(errors);
      }
    });

  
});

export default router;