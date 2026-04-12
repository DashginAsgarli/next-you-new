import React from 'react'
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import HomePage from './pages/home/HomePage';
import './index.css'
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import MusicPage from './pages/hub/MusicPage';
import LibraryPage from './pages/hub/LibraryPage';
import LanguagePage from './pages/hub/LanguagePage';
import CodePage from './pages/hub/CodePage';
import Login from './components/auth/Login';
import ContactPage from './pages/contact/ContactPage';
import PlannerPage from './pages/analysis/PlannerPage';

import CourseDetail from "./components/code/CourseDetail"
import Register from './components/auth/Register';
import Html from './components/code/Html';


import Footer from './layout/Footer'
import DashboardPage from './pages/analysis/DashboardPage'
import EventsPage from './pages/content/EventsPage'
import LeaderboardPage from './pages/analysis/LeaderboardPage'
import NewsPage from './pages/content/NewsPage'
import PortfolioPage from './pages/analysis/PortfolioPage'
import NexstEra from './components/code/NexstEra';

function App() {

  const [open, setOpen] = useState(false);
  function toggleSidebar() {
    setOpen(function (prev) { return !prev })
  }

  function closeSidebar() {
    setOpen(false)
  }

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
            <Route path="/code/nextera/html" element={<Html />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/code/nextera" element={<NexstEra />} />
          </Routes>
        </section>
        <Footer />
      </main>

    </>
  )
}

export default App
