# State<br>
> 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다<br>
<br>

### props와 state<br>
- 공통점 : 컴포넌트에서 사용하거나 렌더링 할 데이터를 담고 있다<br>
- 차이점 : <br>
| Props | State |
| 부모 컴포넌트에서 값을 지정하고 컴포넌트가 그 값을 받아 사용한다 | 컴포넌트 자체적으로 가지고 있는 값 |
| 읽기 전용으로만 사용 가능, 데이터를 수정할 수 없다 | 컴포넌트 내부에서 값이 업데이트 될 수 있다 |
| 부모 컴포넌트에서 값을 바꿀 수 있다 | 종류 : 클래스형 컴포넌트의 stste, 함수형 컴포넌트의 useState를 사용한 state가 있다 |

### Counter.js<br>
> 정말 진부한 예제지만, 이 당연스러운 예제를 이해하기까지... 후하아아
```
import React, { useState } from "react";

const Counter =()=>{
  const [count, setCount] = useState(0)

  const onIncrease=()=>{
    setCount(count+1)
    // = state업데이트 값(현재값 + 1)
  }
  const onDecrease=()=>{
    setCount(count-1)
    // = state업데이트 값(현재값 - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}> +1 </button>
      <button onClick={onDecrease}> -1 </button>
    </>
  )
}
export default Counter;
```
> useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해준다. 
> 이 함수를 호출해주면 배열이 반환, 첫 번째 count는 현재 상태, 두번째 setCount는 Setterr(값을 변경할 수 있는) 함수 입니다.
> 배열 비구조화 할당을 통해 각 상태를 추출해서 사용할 수 있다 


### Say.js
```
import { useState } from 'react'

const Say =() =>{
  const [message, setMessage] = useState('')
  const onClickEnter = () => setMessage('안녕하세요!')
  const onClickLeave = () => setMessage('조심히가세요!')

  return (
    <>  
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </>
  )
}

export default Say
```
<br>

### state를 사용할 때 주의사항<br>
state의 값을 바꿔야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 한다<br>
```
const [object, setObject] = ({a:1, b:1})
object.b = 2  // (X)
```
배열, 객체의 값을 바꿀 때는<br>
바꿀 값의 사본을 만들고 사본에 값을 업데이트 하고 사본의 상태를 setState를 통해 업데이트 해야 한다<br>
> 객체에 대한 사본을 만들 때 : spread연산자를 사용
> 배열에 대한 사본을 만들 때 : 배열 내장함수를 활용 