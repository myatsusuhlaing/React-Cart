import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import reportWebVitals from './reportWebVitals';
import Cartlist from './Cartlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardContent from './content/CartContent';

export default function App(){
  return(
    <BrowserRouter>
      <CardContent>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='cartlist' element={<Cartlist />} />
        </Routes>
      </CardContent>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
