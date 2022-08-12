# HOOKS(2)<br>
### useMemo, useCallback, useRef, <br>
- useMemo : 함수 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다<br>
- useCallback : useMemo와 비슷한 함수, 렌더링 성능을 최적화해야 하는 상황에서 사용할 수 있다.<br>
- useRef : <br>


## 8-4 useMemo<br>
- 함수 컴포넌트 내부에서 발생하는 연산을 최적화 시키는 Hook이다. 
- 리액트에서 컴포넌트의 렌더링은 state업데이트, 부모컴포넌트 업데이트 등으로 인해 수시로 일어날 수 있다.<br>
  **이러한 경우에 불필요한 중복 연산이 발생할 수 있으며 memoization을 활용한 useMemo로 연산을 최적화 시킬 수 있다.**
  <br>
- **Memoizatioin 이란?<br>**
  기존에 수행하던 연산의 결과물을 어딘가에 저장해두고 동일한 값이 들어오면 재활용하는 기법이다. <br>

```
import { useState } from "react";

const getAverage = numbers =>{
  console.log('평균값 계산중')
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b)
  return sum / numbers.length;
}

const UseMemoEx = ()=>{

  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  
  const handleOnChange = (e)=>{
    setNumber(e.target.value)
  }
  const handleOnClick = (e)=>{
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    setNumber('')
  }

  return (
    <>
      <input value={number} onChange={handleOnChange}/>
      <button onClick={handleOnClick}>등록</button>
      <ul>
        {list.map((value,idx)=>(
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>{getAverage(list)} 
      </div>
    </>
  )
}
export default UseMemoEx;
```
평균값을 계산할 때만 getAverage함수가 실행되어야 하는데, input에 값을 입력할 때도 getAverage 함수가 실행된다.<br>
<br>
그 이유는, <br>
input에 onChange함수가 실행 되면 컴포넌트가 재랜더링 되면서 업데이트가 발생한다. 동시에 getAverage의 인수가 되는 list의 값이 초기화되면서 getAverag함수가 호출된다. 컴포넌트의 재랜더링이 필요할 때마다 함수가 호출되므로 이는 비효율적이다.
<br>
<br>

### useMemo를 사용하여 작업을 최적화 할 수 있다.<br>
useMemo는 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고,<br>
원하는 값이 바뀌지 않았으면 이전에 연산했던 결과를 다시 사용할 수 있게 해준다.<br>
```
// 함수형 컴포넌트에 memoization 적용
  (UseMemoEx2.js참고, 아래는 간단예시)

function MyComponent({ x, y }) {
  const z = useMemo(() => compute(x, y), [x, y]);
  return <div>{z}</div>;
}
```
> useMemo 함수는 2개의 인자를 받는데 <br>
> 첫번째는 결과값을 생성해주는 팩토리 함수(=기존에 호출하던 함수)이고, <br>
> 두번째는 기존 결과값 재활용 여부의 기준이되는 입력값 배열이다.<br>
>   ( 두번째 인자인 배열의 요소 값이 업데이트 될 때만 콜백함수를 호출 )<br>
<br>

!useMemo는 성능 최적화를 위해 사용할 수는 있지만, 가장 좋은 방법은 아닐 수 있음을 기억하세요!<br>
최대한 useMemo를 사용하지 않고도 동작할 수 있도록 코드를 작성해볼 것(react.공식문서)<br>

## 8-5 useCallback<br>
함수를 메모이제이션(memoization)하기 위해서 사용되는 hook 함수다.<br>
- useCallback()을 사용하면,<br>
  해당 컴포넌트가 랜더링되더라도 그 함수가 의존하는 값들이 바뀌지 않는 한 기존 함수를 계속해서 반환한다.<br> 
- 첫번째 파라미터로는 생성하고 싶은 함수 넣는다<br> 
- 두번째 파라미터는 배열값을 넣는다. 어떤 값이 업데이트 되었을 때 함수를 새로 생성할지 명시해야한다<br>
```
// 두번째 파라미터가 비어있다 => 컴포넌트가 렌더링 될 때 만들었던 함수를 계속 재샤용
const handleOnChange = useCallback((e)=>{
  setNumber(e.target.value)
},[])

// 두번째 파라미터 number, list값이 들어갔다
// 해당 값 input의 내용이 바뀌거나, list의 새로운 항목이 추가될 때 새로 만들어진 함수를 사용한다
const handleOnClick = useCallback((e)=>{
  const nextList = list.concat(parseInt(number))
  setList(nextList)
  setNumber('')
}, [number,list])
```

## 8-6 useRef<br>
useRef는 리렌더링을 하지 않고 컴포넌트의 속성만 조회, 수정한다<br>
<br>

### 컴포넌트에 focus를 줄 때 <br>
- 선택하고 싶은 DOM에 속성으로 ref 값을 설정해준다.<br>
- inputEl.current.focus();<br>
  : Ref 객체의 current 값은 우리가 선택하고자 하는 DOM을 가리킨다.<br>
    그리고 포커싱을 해주는 DOM API focus() 를 호출한다.<br>
```
import { useState, useMemo, useCallback, useRef } from "react";

const UseCallbackEx = ()=>{

  const handleOnClick = useCallback((e)=>{
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    setNumber('')
    inputEl.current.focus()
  }, [number,list])

  return (
    <>
      <h2>useCallback 예제</h2>
      <input value={number} onChange={handleOnChange} ref={inputEl}/>
      <button onClick={handleOnClick}>등록</button>
    </>
  )
}
```
