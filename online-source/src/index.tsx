import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import mainStore from "./app/stores/MainStore";
import { ModalConstructor } from "./app/component/Modals/ModalConstructor";


ReactDOM.render(
  <React.StrictMode>
      <Provider {...mainStore}>
          <App/>
          <ModalConstructor/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
