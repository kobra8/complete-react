import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../utility';

const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  const updatedArr = state.results.filter(result => result.id !== action.payload.resultElId);
  return
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT :
      return {
        ...state,
        // Concat odcina referencję tablicy -> stosujemy zamiast push
        results: state.results.concat({id: new Date(), value: action.payload.result})
      }
      case actionTypes.DELETE_RESULT :
        // Filter tworzy kopię tabliocy więc też odcina referencje
        const updatedArr = state.results.filter(result => result.id !== action.payload.resultElId);
        // updateObject() - funkcja upraszczajace strukturę switcha
        return updateObject(state, {results: updatedArr})
    default :
        return state
    }

}

export default resultReducer;