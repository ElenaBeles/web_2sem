import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./app/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' caseSensitive element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
