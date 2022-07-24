import React, {useState} from 'react';


const EventPrac= () => {
  const [message, setMessage] = useState('')
  const [user, setUser] = useState('')

  const onChangeMessage = e =>{setMessage(e.target.value)}
  const onChangeUser = e =>{setUser(e.target.value)}
  
  const onClick = ()=>{
    alert (user +" : "+ message)
    setUser("")
    setMessage("")
  }
  const onKeyPress =(e)=>{
    console.log(e)
    if(e.key === 'Enter'){
      onClick()
    }
  }
  return ( 
    <>
      <h1>이벤트연습</h1>
      <input 
        type="text"
        name='user'
        placeholder='user이름을 입력하세요'
        value={user}
        onChange={onChangeUser}
      />
      <input 
        type="text"
        name='message'
        placeholder='메시지를 입력하세요'
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  )
}


export default EventPrac;