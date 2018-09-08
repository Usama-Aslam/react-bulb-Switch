import React, { Component } from 'react';
import '../../App.css';

class Button extends Component {
  constructor(props){
      super(props)
  }

  render() {
    const  {text,onPress}=this.props;
    console.log(this.props)
    return (
    <div>
      <button onClick={onPress}>{text}</button>  
    </div>
    );
  }
}

export default Button;
