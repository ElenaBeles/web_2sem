import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./app/pages/Home";
import {Header} from "./app/component/Header";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' caseSensitive element={<Home />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
