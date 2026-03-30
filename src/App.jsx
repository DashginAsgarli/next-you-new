import React from 'react'
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import HomePage from './pages/HomePage';
import './index.css'
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import MusicPage from './pages/MusicPage';
import LibraryPage from './pages/LibraryPage';
import LanguagePage from './pages/LanguagePage';
import CodePage from './pages/CodePage';
import Login from './components/auth/Login';
import ContactPage from './pages/ContactPage';
import PlannerPage from './pages/PlannerPage';

import CourseDetail from "./components/code/CourseDetail"
import Register from './components/auth/Register';
import Html from './components/code/Html';


import Footer from './layout/Footer'
import DashboardPage from './pages/DashboardPage'
import BlogPage from './pages/BlogPage'
import EventsPage from './pages/EventsPage'
import ToolsPage from './pages/ToolsPage'
import LeaderboardPage from './pages/LeaderboardPage'
import NewsPage from './pages/NewsPage'
import PortfolioPage from './pages/PortfolioPage'
import GrowthPage from './pages/GrowthPage';

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
            <Route path="/code/html" element={<Html />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/growth" element={<GrowthPage />} />
          </Routes>
        </section>
        <Footer />
      </main>

    </>
  )
}

export default App
