import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../utility'; 

const initialState = {
  counter: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT :
      // updateObject() - funkcja upraszczajace strukturę switcha
      return updateObject(state, {counter:  state.counter + 1})
 
    case actionTypes.DECREMENT :
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD : 
      return {
        ...state,
        counter: state.counter + action.payload.value
      }
    case actionTypes.SUBTRACT :
      return {
        ...state,
        counter: state.counter - action.payload.value
      }
    default :
        return state
    }

}

export default counterReducer;