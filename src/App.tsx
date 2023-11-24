import React, { Suspense, useContext, useState } from "react";
import { Counter } from "./components/Counter";
import "./styles/index.scss"
import { Routes, Route } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Link } from "react-router-dom";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";



export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', [theme], {})}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to="/about">o nas</Link>
      <Link to="/">home paeg </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPageLazy />}/>
            <Route path={'/'} element={<MainPageLazy />}/>
        </Routes>
      </Suspense>
    </div>
  );
};
