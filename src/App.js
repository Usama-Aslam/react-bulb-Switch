import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Component/Button/Button'


class App extends Component {
  constructor(){
    super();
    this.state={
      show:true,
      breakState:false,
      bulbState:true
      // showImage:true
    }
    // this.hideImage=this.hideImage.bind(this)
    // this.hideImage=this.hideImage.bind(this)
    this.toggle=this.toggle.bind(this);
    this.breakBulb=this.breakBulb.bind(this);
  }

  toggle(too){
    this.setState({
      show:too,
      bulbState:true,
      breakState:false
    })
  }

  breakBulb(){
    this.setState({
      bulbState:false,
      breakState:true
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
    const  {show, breakState, bulbState}=this.state;
    return (
    <div>
      <Button text="switch On" onPress={()=>{this.toggle(true)}}/>
      <Button text="switch Off"onPress={()=>{this.toggle(false)}}/>
      <Button text="Break"onPress={this.breakBulb}/>

      {!show && bulbState && <img src={require('./Assets/images/bulb-off.jpg')} width="300" height="400"/>}
      {show  && bulbState &&<img src={require('./Assets/images/bulb-on.jpg')} width="300" height="400"/>}
      {breakState && <img src={require('./Assets/images/bulb-break.jpg')} width="300" height="400"/>}
    </div>
    );
  }
}

export default App;
