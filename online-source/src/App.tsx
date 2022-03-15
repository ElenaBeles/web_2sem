import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./app/pages/Home";
import {Header} from "./app/component/Header";
import mainStore from "./app/stores/MainStore";
import { Provider } from 'mobx-react';

function App() {
  return (
    <BrowserRouter>
        <Provider {...mainStore}>
            <Header/>
            <Routes>
                <Route path='/' caseSensitive element={<Home />}/>
            </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
