import { ADD_FLASH_MESSAGE } from '../actions/actionTypes'
import shortid from 'shortid';

export default function flashMessages(state = [], action = {}) {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text    
        } 
      ]
      break;
  
    default:
      return state;
  }
}