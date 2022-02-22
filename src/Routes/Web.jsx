import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import HomePage from '../Pages/HomePage'
import ProjectPage from '../Pages/ProjectPage'
import ResumePage from '../Pages/ResumePage'
const Web = () => {
  return (
    <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route  path='/resume' element={<ResumePage />} />
        <Route  path='/project' element={<ProjectPage />} />
        <Route  path='/about' element={<AboutPage />} />
        <Route  path='/contact' element={<ContactPage />} />
    </Routes>
  )
}

export default Web