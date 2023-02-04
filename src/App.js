import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import New from './pages/new/New';
import "./style/dark.scss";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { productInputs, userInputs } from './formSource';
import { useState } from 'react';
function App() {
  return (
    <div className={"app"}>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='users'>
              <Route index element={<List/>}/>
              <Route path=':userId' element={<Single/>}/>
              <Route path='new' element={<New inputs={userInputs} title="Add new User"/>}/>
          </Route>
          <Route path='products'>
              <Route index element={<List/>}/>
              <Route path=':productId' element={<Single/>}/>
              <Route path='new' element={<New inputs={productInputs} title="Add new Product"/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
