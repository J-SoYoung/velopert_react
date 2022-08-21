import { useState } from "react";


const MapEx=()=>{

  const [names, setNames] = useState([
    { id:1, text:'눈사람'},
    { id:2, text:'얼음'},
    { id:3, text:'눈'},
    { id:4, text:'바람'}
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const handleOnChange = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value)
  }
  const handleOnClick =(e) =>{
    console.log('추가버튼')
    const nextNames = names.concat({
      id : nextId,
      text : inputText
    });
    setNextId(nextId+1)
    setNames(nextNames)
    setInputText('')
  }
  const handleOnRemove =(id)=>{
    console.log(id)
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames)
  }
  const nameList = names.map((name) =>
    <li key={name.id} onDoubleClick={()=> handleOnRemove(name.id)}>
      {name.text}
    </li>
  )

  return (
    <>
      <input value={inputText} onChange={handleOnChange}/>
      <button onClick={handleOnClick}>추가</button>

      <ul>{nameList}</ul>
    </>
  )
}

export default MapEx;