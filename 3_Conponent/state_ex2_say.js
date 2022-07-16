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
