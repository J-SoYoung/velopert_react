# 이벤트핸들링 <br>
### 이벤트 사용할 때 주의사항<br>
> 1. 이벤트 이름은 카멜 표기법으로 작성<br>
> 2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달<br>
> 3. DOM요소에만 이벤트를 설정할 수 있다<br>
<br>

### 이벤트 종류<br>
- Clipboard
- Kyeboard
- Focus
- Form
- Mouse
- Selection ...
- https://ko.reactjs.org/docs/events.html#keyboard-events <br>
<br>

### onChange이벤트 
> 사용자가 입력한 값을 react가 핸들링 할 수 있게 하려면 state로 관리해야 한다<br>
> input에 값이 바뀔 때마다 setMessage,setUser 상태변화 함수를 이용해서<br>
> message, user에 입력값을 저장해줄 수 있다<br>
<br>

> onChange 이벤트를 이용하면 콜백함수를 사용할 수 있다<br>
> input에 값을 입력하면 onChange의 이벤트객체 값(e.target.value)을 이용해 setMessage에 업데이트 시켜준다<br> 
```
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
```

### input 여러개 다루기<br>
> event객체 => e.target.name을 활용한다.<br>
> useState는 각각의 state를 관리하는 게 아니라 두 개를 합쳐 객체로 관리할 수 있다<br>
> state를 객체로 묶었으니 비구조화 할당을 사용하여 내부값을 바로 추출할 수 있게 해준다<br>
> **...state : 스프레드 연산자**를 사용해서 state가 가지고 있는 기본 프로퍼티들을 자동적으로 넣어준다<br>
> 그리고 바꿀 값만 아래에 추가해 준다. <br>
<br>

```
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
      />
      <button onClick={handleOnClick}>확인</button>
    </>
  )
}

export default EventPrac2;
```