# HOOKS(1)<br>
https://thdud4479.tistory.com/172?category=1051245 


### useState, useEffect, useReducer<br>
Hook은 함수 컴포넌트에서 React state와 생명주기 기능을 연동할 수 있게 해주는 함수다.<br>
- useState : state의 상태를 관리하는 Hook<br>
- useEffect : 렌더링 직후 작업 설정하는 Hook<br>
- useReducer : useState처럼 state를 관리, 업데이트 할 수 있는 Hook<br>
<br>

## 8-1 useState<br>
```
const Counter = ()=>{
  const [value, setValue] = useState(0)
```
> useState 함수를 호출하면 배열을 반환<br>
> 첫번째 원소 value = 현재 상태값 변수이고<br>
> 두번째 원소 setValue = 상태값을 갱신해주는 setter함수다<br>
> useState 괄호 안의 값은 초기 상태값이다.<br>
<br>

```
// 위 코드와 아래 코드의 의미는 같다. 
// 위의 코드는 구조분해할당 문법을 통해 각 원소를 추출해 사용하는 것이다

const vlaueState = useState(0)
const value = valueState[0] 
const setValue = valueState[1]  
```
<br>

## 8-2 useEffect<br>
기본형태 : useEffect( function, deps )<br>
  - function : 수행하고자 하는 작업
  - deps(의존배열) : 배열 형태이며, 배열 안에는 검사하고자 하는 특정값 or 빈배열이 들어간다

**1. 마운트 될 때만 실행하고 싶을 때<br>**
= 컴포넌트가 처음 나타날 때만 실행하고 싶을 때<br>
함수의 두 번째 파라미터(deps)로 비어 있는 배열을 넣어주면 된다.<br>
```
  useEffect(()=>{
    console.log('마운트 될 때만 실행된다')
  },[])
```
<br>

**2. 배열을 생략한다면 리렌더링 될 때마다 실행된다<br>**
```
  useEffect(()=>{
    console.log('리렌더링 될 때마다실행')
  })
```
<br>


**3. 특정값이 업데이트 될 때만 실행하고 싶을 때<br>**
useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 된다<br>
```
  useEffect(()=>{
    console.log('마운트 될 때만 실행된다')
  },[name])
```
<br>

**4. 뒷정리하기 <br>**
> useEffect는 기본적으로 렌더링 되고 난 직후마다 실행되며, <br>
> 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다<br>
> 컴포넌트가 언마운트 되기 전, 업데이트 전 useEffect의 cleanup함수를 반환해 주어야 한다<br>
> - 언마운트 될 때 cleanup함수를 실행하고 싶을 때<br>
> : 두 번째 파라미터로 빈 배열을 넣는다<br>
> - 특정값이 업데이트 되기 직전에 cleanup함수를 실행하고 싶을 때<br>
> : deps배열 안에 검사하고 싶은 값을 넣는다<br>
```
  useEffect(()=>{
    console.log('effect')
    return ()=>{
      console.log('cleanup,unmount')
    }
  },[])

```
<br>

## 8-3 useReducer<br>
> useState와 useReducer는 컴포넌트의 상태를 관리하는 hook이다.<br>
> useReducer는 컴포넌트와 상태 업데이트 로직을 분리하여 **컴포넌트 외부에서도 상태관리**를 할 수 있다<br>
> useReducer를 사용하면 컴포넌트 바깥에서도 작성할 수 있고, 다른 파일에 작성하여 불러와서 사용할 수도 있다.<br>
<br>

**1. 컴포넌트 외부에 상태 업데이트 로직의 reducer함수 작성**<br>
기본형태 : function reducer(state, action) { ... }<br>
```
function reducer (state, action) {
  switch (action.type){
    case 'INCREMENT' :
      return {value : state.value+1}
    case 'DECREMENT':
      return {value : state.value-1}
    default : 
      return state
  }
}
```
<br>

**2. useReducer함수 사용** <br>
기본형태 : const [state, dispatch] = useReducer(reducer,initialState)<br>
> state : 현재상태<br>
> dispatch : action발생 함수 : diaptch({type:'INCREMENT})<br>
> reducer : 상태업데이트 로직을 담은 함수<br>
> initialState : 초기값<br>
```
const ReducerEx=()=>{
  const [state, dispatch] = useReducer(reducer, {value : 0});
  // 현재상태값 : state의 이름을 주고, 액션발생 함수 dispatch를 가져온다
  // useReducer의 첫번째 파라미터로 reducer함수(컴포넌트 밖에 작성한)를 넣어주고 
  // 초기값은 0으로 설정한다

  return (
    <>
      <p>현재카운터 값은 <b>{state.value}</b> 입니다</p>
      <button onClick={()=> dispatch({type:'INCREMENT'})}> +1 </button>
      <button onClick={()=> dispatch({type:'DECREMENT'})}> -1 </button>
    </>
  )
  // 버튼을 클릭했을 때, dispatch 함수를 호출해서 type이 담긴 객체를 넣어준다.
  // type을 INCREMENT로 전달해주면 reducer함수는 현재 상태에 +1을 해준다.
}
```
