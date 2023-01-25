import React , {Component} from 'react';

class Welcome extends Component{
    render(){
        return (
            <div>
                <p>{this.props.name}</p>
                {this.props.children}
            </div>
        )
    }
}
export default Welcome;