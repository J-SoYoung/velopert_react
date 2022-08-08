import { useState } from 'react'

const Counter = ()=>{
  const [value, setValue] = useState(0)

  const add= ()=>{
    setValue(value+1)
  }
  const minor=()=>{
    if(value>0){
      setValue(value-1)
    }else{
      alert('0보다 작을 수 없습니다')
    }
  }
  return (
    <>
      <p>현재 카운터 값은 <b>{value}</b>입니다</p>
      <button onClick={add}> +1 </button>
      <button onClick={minor}> -1 </button>
    </>
  )
}

export default Counter;