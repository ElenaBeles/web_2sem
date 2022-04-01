import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./app/pages/Home";
import {Header} from "./app/component/Header";
import mainStore from "./app/stores/MainStore";
import { Provider } from 'mobx-react';
import {Ecomarket2} from "./app/pages/Ecomarket2";

function App() {
  return (
    <BrowserRouter>
        <Provider {...mainStore}>
            <Header/>
            <Routes>
                <Route path='/' caseSensitive element={<Home />}/>
                <Route path='/ecomarket' caseSensitive element={<Ecomarket2 />}/>
            </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
