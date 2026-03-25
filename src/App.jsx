import React from 'react'
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import HomePage from './pages/HomePage';
import './index.css'
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import MusicPage from './pages/MusicPage';
import LibraryPage from './pages/LibraryPage';
import LanguagePage from './pages/LanguagePage';
import CodePage from './pages/CodePage';
import { useState, useCallback } from "react";
import Login from './components/auth/Login';
import ContactPage from './pages/ContactPage';
import PlannerPage from './pages/PlannerPage';

import CourseDetail from "./components/code/CourseDetail"
import Register from './components/auth/Register';

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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/planner" element={<PlannerPage />} />
            <Route path="/code/:courseId" element={<CourseDetail />} />

          </Routes>
        </section>
      </main>

    </>
  )
}

export default App
