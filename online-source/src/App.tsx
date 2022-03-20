import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./app/pages/Home";
import {Header} from "./app/component/Header";
import mainStore from "./app/stores/MainStore";
import { Provider } from 'mobx-react';
import {Ecomarket} from "./app/pages/Ecomarket";

function App() {
  return (
    <BrowserRouter>
        <Provider {...mainStore}>
            <Header/>
            <Routes>
                <Route path='/' caseSensitive element={<Home />}/>
                <Route path='/ecomarket' caseSensitive element={<Ecomarket />}/>
            </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
