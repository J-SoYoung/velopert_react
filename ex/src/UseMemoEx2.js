import { useState, useMemo } from "react";

const getAverage = numbers =>{
  console.log('평균값 계산중')
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b)
  return sum / numbers.length;
}

const UseMemoEx2 = ()=>{

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

  const avg = useMemo(()=> getAverage(list), [list])

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
        <b>평균값 : </b>{avg} 
      </div>
    </>
  )
  
}

export default UseMemoEx2;