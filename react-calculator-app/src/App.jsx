import React, { useState } from 'react';
import './App.css'
import { Calculator } from './Calculator';


function App() {
// 進捗率をstateとして管理
const [display, setDisplay] = useState(" ");

  return (
    <>
      <Calculator display={display} setDisplay={setDisplay} />
    </>
  )
}

export default App
