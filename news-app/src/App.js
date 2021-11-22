import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  return <div className='app'>
    <button onClick={() => {
      fetch('http://localhost:8080/bitcoin')
        .then((res) => res.json())
        .then(console.log);
    }}>Display Data
    </button>
  </div>
}


export default App;
