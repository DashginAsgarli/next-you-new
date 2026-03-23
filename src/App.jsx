import React from 'react'
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import HomePage from './pages/HomePage';
import './index.css'
import Header from './components/auth/Header';
import Sidebar from './components/auth/Sidebar';
import MusicPage from './pages/MusicPage';
import LibraryPage from './pages/LibraryPage';
import LanguagePage from './pages/LanguagePage';
import CodePage from './pages/CodePage';
import { useState, useCallback } from "react";

function App() {

  const [open, setOpen] = useState(false);
  const toggleSidebar = useCallback(() => setOpen(prev => !prev), []);
  const closeSidebar = useCallback(() => setOpen(false), []);

  return (
    <>
      <main>

        <Header onProfileClick={toggleSidebar} />
        <Sidebar isOpen={open} onClose={closeSidebar} />


        <Outlet />


        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/language" element={<LanguagePage />} />
            <Route path="/code" element={<CodePage />} />


          </Routes>
        </section>
      </main>

    </>
  )
}

export default App
