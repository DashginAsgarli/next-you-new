import React from 'react'
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import HomePage from './pages/HomePage';
import './index.css'

function App() {
  return (
    <>
      <main>


        <Outlet />


        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </section>
      </main>

    </>
  )
}

export default App
