import React , {Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome visitor'
        };
    }
    changeText(){
        this.setState({message:'Thank you'});
    }
    render(){
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={()=>this.changeText()}>Action</button>
            </div>
        );
    }
}
export default Message;