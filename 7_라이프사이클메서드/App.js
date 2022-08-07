import React, { useRef, useState } from 'react';
import LifeCycleSample from './LifeCycleSample';
import './App.css'





function App() {

  const [is_view, setIsView] = React.useState(true)

  return (
    <div className='AppBox'>
      
      {is_view? <h1>리액트예제</h1> : <h1>사라졌다</h1>}
      {is_view? <LifeCycleSample/> : null }
    <button onClick={()=>{setIsView(!is_view)}}>바꾸기</button>
    </div>
  )
}



export default App;

