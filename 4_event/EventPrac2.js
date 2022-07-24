import React, {useState} from 'react';


const EventPrac2= () => {
  const [state, setState] = useState({
    user:'',
    message:''
  });

  const { user, message } = state;

  const handleOnChange = e =>{
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const handleOnClick = (e)=>{
    alert (user +" : "+ message)
    setState({
      user:'',
      message:''
    })
  }
  const onKeyPress =(e)=>{
    console.log(e)
    if(e.key === 'Enter'){
      handleOnClick()
    }
  }
  return ( 
    <>
      <h1>이벤트연습</h1>
      <input 
        type="text"
        name='user'
        placeholder='user이름을 입력하세요222'
        value={user}
        onChange={handleOnChange}
      />
      <input 
        type="text"
        name='message'
        placeholder='메시지를 입력하세요222'
        value={message}
        onChange={handleOnChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={handleOnClick}>확인</button>
    </>
  )
}



export default EventPrac2;