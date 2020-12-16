import React from 'react';
import './App.css';
import FileUploadLayout from './Components/FileUploadForm/FileUploadLayout';
import MainNav from './Components/Layout/MainNav';

function App() {
  return (
    <div className="App">
      <MainNav />
      <div style={{marginTop:'5%'}}>
        <FileUploadLayout />
      </div>
    </div>
  );
}

export default App;
