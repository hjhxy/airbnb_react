import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css/normalize.css'; //全局样式初始化
import '@/assets/init.css'; //自定义样式初始化
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Suspense fallback={<h3>loading...</h3>}>
          <Provider store={store}>
              <HashRouter>
                  <App />
              </HashRouter>
          </Provider>
      </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
