import React, { useRef, useState } from 'react';
import './App.css'
import UseCallbackEx from './UseCallbackEx';
import UseMemoEx from './UseMemoEx';
import UseMemoEx2 from './UseMemoEx2';



function App() {


  return (
    <div className='AppBox'>
      <h1>useMemo실습</h1>
      <UseCallbackEx/>
      {/* <UseMemoEx2/> */}
      {/* <UseMemoEx/> */}
    </div>

  )
}



export default App;

