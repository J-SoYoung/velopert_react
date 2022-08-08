import { useEffect, useState } from "react"


const Info=()=>{
  // useState를 사용해 여러개의 상태관리가 가능하다.
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')

  //업데이트 될 때마다 실행
  useEffect(()=>{
    console.log('렌더링이 완료되었습니다')
    console.log({name,nickname}) // 객체형태로 출력
    console.log(name,nickname)   // 결과값만 출력
  })
  
  // 처음 렌더링 되었을 때만 실행
  useEffect(()=>{
    console.log('마운트 될 때만 실행된다')
  },[])

  // 특정 값이 업데이트 되었을 때만 실행
  // name에 값이 들어와야 console에 출력, nickname이 수정되어도 출력안됨
  useEffect(()=>{
    console.log('특정값이 업데이트 됨',name, nickname)
  },[name])

  // 뒷정리함수
  useEffect(()=>{
    console.log('effect')
    return ()=>{
      console.log('cleanup,unmount')
    }
  },[])


  const onChangeName = (e)=>{
    setName(e.target.value)
  }
  const onChangeNickname = (e) =>{
    setNickname(e.target.value)
  }

  return (
    <>
      <div>
        <input value={name} placeholder='이름을 작성하세요' onChange={onChangeName}/>
        <input value={nickname}  placeholder='닉네임을 작성하세요' onChange={onChangeNickname}/>
      </div>
      <div>
        <p><b>이름 : </b>{name}</p>
        <p><b>닉네임 : </b>{nickname}</p>
      </div>
    </>
  )
}

export default Info;