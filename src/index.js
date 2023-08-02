import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css'
import RootContext from './context';
import './index.css';
import Root from './root';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootContext>
    <Root/>
    </RootContext>    
  </React.StrictMode>
);
