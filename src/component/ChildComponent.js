import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={()=>props.clickBind('jatu')}>Jatu</button>
  )
}

export default ChildComponent