import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Table, Header, EditForm } from 'sections'
import './styles/global.scss'

export default function App () {
  return (
    <>
      <Header isLoggedIn={true} />
      <div className='breadcrumbs'><a href='#'>Home Page</a> / Settings</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
