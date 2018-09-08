import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Component/Button/Button'


class App extends Component {
  constructor(){
    super();
    this.state={
      show:true
      // showImage:true
    }
    // this.hideImage=this.hideImage.bind(this)
    // this.hideImage=this.hideImage.bind(this)
    this.toggle=this.toggle.bind(this);
  }

  toggle(too){
    this.setState({
      show:too
    })
  }
  // hideImage(){
  //   this.setState({
  //     showImage:false
  //   })
  // }

  // showImage(){
  //   this.setState({
  //     showImage:true
  //   })
  // }

  render() {
    const  {show}=this.state;
    return (
    <div>
      <Button text="switch On" onPress={()=>{this.toggle(true)}}/>
      <Button text="swithc Off"onPress={()=>{this.toggle(false)}}/>

      {show && <img src={require('./Assets/images/image.png')} width="150" height="150"/>}
    </div>
    );
  }
}

export default App;
