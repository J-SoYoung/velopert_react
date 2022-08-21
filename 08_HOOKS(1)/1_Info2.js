import { useState } from "react"


const Info2=()=>{
  // 비슷한 내용의 상태관리가 필요하다면 객체로 묶어서 useState로 활용가능하다
  const [info, setInfo ] = useState({
    name : '',
    nickname : '',
  })

  const onHandleChange = (e)=>{
    setInfo({
      ...info,
      [e.target.name] : e.target.value
    })

  }
  
  return (
    <>
      <div>
        <input value={info.name} name='name' placeholder='이름을 작성하세요' onChange={onHandleChange}/>
        <input value={info.nickname} name='nickname' placeholder='닉네임을 작성하세요' onChange={onHandleChange}/>
      </div>
      <div>
        <p><b>이름 : </b>{info.name}</p>
        <p><b>닉네임 : </b>{info.nickname}</p>
      </div>
    </>
  )
}

export default Info2;