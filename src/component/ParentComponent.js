import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'nams'
    }
    this.clickHandle = this.clickHandle.bind(this)
  }
  clickHandle(name){
    alert(this.state.name + " & " + name)
  }
  render() {
    return (
      <ChildComponent clickBind={this.clickHandle}/>
    )
  }
}

export default ParentComponent