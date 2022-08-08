import { useEffect, useState, useReducer } from "react"

function reducer(state, action){
  return {
    ...state,
    [action.name]: action.value
  };
}

const ReducerInfo=()=>{
  const [state, dispatch] = useReducer(reducer,{
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  const onHandleChange = (e)=>{
    dispatch(e.target)
  }


  return (
    <>
      <div>
        <input value={name} name='name' placeholder='이름을 작성하세요' onChange={onHandleChange}/>
        <input value={nickname}  name='nickname' placeholder='닉네임을 작성하세요' onChange={onHandleChange}/>
      </div>
      <div>
        <p><b>이름 : </b>{name}</p>
        <p><b>닉네임 : </b>{nickname}</p>
      </div>
    </>
  )
}

export default ReducerInfo;