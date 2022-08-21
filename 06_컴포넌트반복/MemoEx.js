import { useState } from "react";

const MemoEx =()=>{
  const [memos, setMemos] = useState([
    {idx: 1, text: '코딩하기'},
    {idx: 2, text: '음악듣기'},
    {idx: 3, text: '운동하기'},
    {idx: 4, text: '카페가기'},
  ])

const [inputText, setInputText] = useState('')
const [nextIdx, setNextId] = useState(5)

const memoList =
  memos.map(memo => 
    <li key={memo.idx} onDoubleClick={()=>{handleOnRemove(memo.idx)}}> 
      {memo.text}
    </li>   
  )

const handleOnChange=(e)=>{
  // console.log(e.target.value)
  setInputText(e.target.value)
}

const handleOnClick=()=>{
  console.log('추가버튼')
  const nextMemos = memos.concat({
    idx: nextIdx, 
    text: inputText
  });
  setNextId(nextIdx+1)
  setMemos(nextMemos)
  setInputText('')
}

const handleOnRemove=(idx)=>{
  console.log(idx)
  const nextMemos = memos.filter(memo => memo.idx !== idx)
  console.log(nextMemos)
  setMemos(nextMemos)
}

  return (
    <>
      <h1>TODO 메모</h1>
      <input onChange={handleOnChange} value={inputText} />
      <button onClick={handleOnClick}>추가</button>
      <ul>{memoList}</ul>

    </>
  )
}

export default MemoEx;
