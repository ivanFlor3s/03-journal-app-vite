
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { JournalPage } from '../pages/JournalPage';

export const JournalRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<JournalPage/>}></Route>
        <Route path='/*' element={<Navigate to={"/"}/>}></Route>
    </Routes>
  )
}
