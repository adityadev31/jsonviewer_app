import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import FileBrowser from './components/fileBrowser/FileBrowser';
import Viewer from './components/viewer/Viewer';
import jsonFiles from './jsonFiles/index'

function App() {

  const [selectedIdx, setSelectedIdx] = useState(-1)

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className='flexViewer'>
          <FileBrowser propsItems={{ selectedIdx, setSelectedIdx, jsonFiles }} />
          <Routes>
            <Route path='/' element={<Viewer propsItems={{ selectedIdx, jsonData: selectedIdx >= 0 ? jsonFiles[selectedIdx] : [] }} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
