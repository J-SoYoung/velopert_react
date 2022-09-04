import React, { useRef, useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'



const App = () => {

  const [data, setData] = useState(null)
  const onClick = async()=> {
    // try{
    //   const response = await axios.get(
    //     'https://jsonplaceholder.typicode.com/todos/1'
    //   );
    //   console.log(response.data)
    //   console.log(JSON.stringify(data.data))
    //   setData(response)
    // }
    // catch(e){
    //   console.log(e)
    //   alert('Error데이터를 불러올 수 없습니다')
    // }
    try{
      await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>{
          console.log(response.data)
          setData(response)
        })     
    }catch(e){
      console.log(e)
      alert('Error데이터를 불러올 수 없습니다')
    }
  }

  return (
    <div className='AppBox'>
      <> 
        <button onClick={onClick}>불러오기</button>
        <div>
          {data && <textarea rows={10} value={JSON.stringify(data)} readOnly={true}/>}
        </div>
      </>
    </div>
  )
}



export default App;

