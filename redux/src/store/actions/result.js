import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: {
      result: res
    }
  }
}
export const storeResult = (result) => {
  return  (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().counterStore.counter;
      console.log(oldCounter);
      dispatch(saveResult(result));
    }, 2000)
  }
};
export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: {
      resultElId: id
    }
  }
};