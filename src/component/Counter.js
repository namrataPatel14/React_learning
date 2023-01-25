import React, { Component } from 'react'

class Counter extends Component {
  constructor(){
    super()
    this.state={
        value:0
    }
  }
  updateVal(value){
    if(value === 'plus'){
        this.setState((prevState)=>({
            value: prevState.value + 1
        }))
    }else if(value === 'minus' && this.state.value > 0){
        this.setState((prevState)=>({
            value: prevState.value - 1
        }))
    }
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.updateVal('plus')}>+</button>
        <p>{this.state.value}</p>
        <button onClick={()=>this.updateVal('minus')}>-</button>
      </div>
    )
  }
}

export default Counter