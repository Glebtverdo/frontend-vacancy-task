import React from 'react'
import MenuComp from './components/Menu/MenuComponent'
import './App.css'
import TokensComp from './components/Tokens/TokensComponent'
import HeaderComp from './components/Header/HeaderComponent'
import {Navigate, Route, Routes} from "react-router-dom";
import TokenNamePage from "./components/TokenNamePage/TokenNamePage"

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/tokens" />} />
      <Route path={"/tokens"} element={<div className="app">
        <MenuComp />
        <div className="wrapper">
          <HeaderComp text={"Токены Everscale"} hasCategories={true}/>
          <TokensComp/>
        </div>
      </div>} />
      <Route path={"/search"} element={<div className="app">
        <MenuComp />
        <div className="wrapper">
          <HeaderComp text={"Поиск"} hasCategories={false}/>
          <h3>Тестовое задание не предусматривает реализацию контента здесь.</h3>
        </div>
      </div>} />
      <Route path={"/tokens/:id"} element={<div className="app">
        <MenuComp />
        <div className="wrapper">
          <TokenNamePage/>
          <h3>Тестовое задание не предусматривает реализацию контента здесь.</h3>
        </div>
      </div>} />
      
    </Routes>
  )
}

export default App
