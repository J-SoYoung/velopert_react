import React, {useRef, useState} from 'react';
import './Sample.css'

const Sample = () =>{

  const [state, setState] = useState({
    password:'',
    clicked:false,
    validated:false,
  });

  const { password, clicked, validated } = state;
  const handleChange= (e)=>{
    setState({ password : e.target.value })
  }
  const handleClick = (e) =>{
    setState({
      clicked : true,
      validated : password === '0000'
    })
  }

  return (
    <>
      <input
        type='password'
        value={password}
        onChange={handleChange}
        className={clicked? ( validated ? "success" : "failure" ) : ""}
      />
      
      <button onClick={handleClick}>검증하기</button>
    </>
  )
}

export default Sample;