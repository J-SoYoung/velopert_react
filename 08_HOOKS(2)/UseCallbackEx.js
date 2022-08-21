import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers =>{
  console.log('평균값 계산중')
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b)
  return sum / numbers.length;
}

const UseCallbackEx = ()=>{

  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null)
  
  const handleOnChange = useCallback((e)=>{
    setNumber(e.target.value)
  },[])

  const handleOnClick = useCallback((e)=>{
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    setNumber('')
    inputEl.current.focus()
  }, [number,list])

  const avg = useMemo(()=> getAverage(list), [list])

  return (
    <>
      <h2>useCallback 예제</h2>
      <input value={number} onChange={handleOnChange} ref={inputEl}/>
      <button onClick={handleOnClick}>등록</button>
      <ul>
        {list.map((value,idx)=>(
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>{avg} 
      </div>
    </>
  )
  
}

export default UseCallbackEx;