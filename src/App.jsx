import React from 'react'
import LoginPage from './components/Login/LoginPage'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Layout from './components/Layout_Compinents/Layout';

export default function App() {

  return (
    <>
   
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        
        <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
