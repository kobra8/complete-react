import  React  from 'react';

const validation = (props)=> {

  let validationMessage
  let messageError = 'Text too short'
  let messageOk = 'Text long enough'
  if(props.textLength < 5 ){
    validationMessage = messageError;
  }
  else {
   validationMessage = messageOk;
  }
  return(
    <h3>{validationMessage}</h3>
  )

}

export default validation;