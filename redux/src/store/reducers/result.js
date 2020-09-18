import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT :
      return {
        ...state,
        // Concat odcina referencję tablicy -> stosujemy zamiast push
        results: state.results.concat({id: new Date(), value: action.result})
      }
      case actionTypes.DELETE_RESULT :
        // Filter tworzy kopię tabliocy więc też odcina referencje
        const updatedArr = state.results.filter(result => result.id !== action.resultElId);
        return {
          ...state,
          results: updatedArr
        }
    default :
        return state
    }

}

export default resultReducer;