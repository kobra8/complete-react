import React from 'react';

const inputStyle = {
  height:'30px',
  textAlign: 'center',
  border: '1px solid navy',
  fontWeight: '600'
}

const userInput = props => {
  return(
    <input type="text" style={inputStyle} onChange={props.changeName} value={props.name}/>
  )
}

export default userInput;