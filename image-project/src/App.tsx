import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrawRectangle from './components/DrawRectangle/DrawRectangle';
import ImageCanvas from './components/ImageCanvas';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <div>
        <ToastContainer/>
        <DrawRectangle></DrawRectangle>
       
        
      </div>
    </div>
  );
}

export default App;
