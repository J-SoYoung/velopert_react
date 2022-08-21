import React, {useState} from 'react';


const EventPrac2= () => {

  const [state, setState] = useState({
    'username':'',
    'content':'',
    'emotion':'happy',
  })

  const {username, content, emotion} = state 

  const handleChange = (e) =>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const handleClick = () =>{
    alert (username + "의 감정 : " + emotion + " 메모 저장 성공")
    setState({
      'username':'',
      'content':'',
      'emotion':'happy',
    })
    console.log(username, content, emotion)
  }
  
  return (
    <>
    <input 
      type = 'text'
      name = 'username'
      value = {username}
      placeholder = '이름을 입력하세요'
      onChange = {handleChange}
      />
    <textarea
      name = 'content'
      value = {content}
      placeholder = '내용을 입력하세요'
      onChange = {handleChange}
    >
    </textarea>
    <select
      name = 'emotion'
      value = {emotion}
      onChange = {handleChange}
    >
      <option value={"happy"}>happy</option>
      <option value={"soso"}>soso</option>
      <option value={"sad"}>sad</option>
    </select>

    <button onClick={handleClick}>확인</button>
    </>
  )
}

export default EventPrac2;