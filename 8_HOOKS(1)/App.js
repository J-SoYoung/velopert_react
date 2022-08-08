import React, { useRef, useState } from 'react';
import './App.css'

import Counter from './1_Counter';
import Info from './1_Info';
import Info2 from './1_Info2';
import ReducerEx from './2_ReducerCounter';
import ReducerInfo from './2_ReducerInfo';





function App() {

  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <div className='AppBox'>
        <Counter/>
      </div>
      <div className='AppBox'>
        <button onClick={()=> setVisible(!visible)}>
          {visible? '숨기기' : '보이기'}
        </button>
        <hr/>
        {visible && <Info/> }
      </div>
      <div className='AppBox'>
        <Info2/>
      </div>
      <div className='AppMini'>
        <ReducerEx/>
        <hr/>
        <ReducerInfo/>
      </div>
    </>

  )
}



export default App;

