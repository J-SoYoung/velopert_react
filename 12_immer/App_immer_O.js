import React, { useRef, useState, useCallback } from 'react';
import './App.css'
import produce from 'immer';

const App = () => {

  const nextId = useRef(1);
  const [form, setForm] = useState({ name:'', username: '' })
  const [data, setData] = useState({
    array:[],
    uselessValue: null
  })

  //input수정
  const onChange = useCallback((e)=>{
    const { name, value } = e.target;
    setForm(
      produce(form, draft => {
        draft[name] = value;
      })
    );
  },[form])

  //form등록
  const onSubmit = useCallback ((e)=>{
    e.preventDefault();
    //등록
    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username,
    }
    
    //array추가
    setData(
      produce(data, draft =>{
        draft.array.push(info)
      })
    );

    //form초기화
    setForm({
      name:'',
      username:''
    })

    //id new번호
    nextId.current += 1;

  },[data, form.name, form.username])

  const onRemove = useCallback(
    id=> {
      setData(
        produce(data, draft =>{
          draft.array.splice(draft.array.findIndex(info => info.id === id),1)
        })
      )
    }, [data]
  )

  return (
    <div className='AppBox'>
      <h1>immer</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input 
            name='username'
            placeholder='아이디'
            value={form.username}
            onChange={onChange}
          />
          <input
            name='name'
            placeholder='이름'
            value={form.name}
            onChange={onChange}
          />
          <button type='submit'>등록</button>
        </form>
      </div>
      <div>
        <ul>
          {data.array.map(info=>(
            <li 
              key={info.id} 
              onClick={()=>onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}



export default App;

