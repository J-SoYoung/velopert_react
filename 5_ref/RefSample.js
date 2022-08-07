import React, {useRef, useState, Component} from 'react';
import './RefSample.css'

class RefSample extends Component {
  state = {
    password:"",
    clicked : false,
    validated: false,
  }

  handleChange = (e) =>{
    this.setState({
      password: e.target.value
    })
  }

  handleButtonClick = ()=>{
    this.setState({
      clicked : true,
      validated : this.state.password === '0000'
    })
    this.input.focus()
  }

  handleKeyPress = (e)=>{
    if(e.key==='Enter'){
      this.handleButtonClick()
    }
  }

  render(){
    return(
      <>
        <input
          type="password"
          ref={(ref)=> this.input=ref}
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ""}  
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </>
    )
  }
}

export default RefSample;