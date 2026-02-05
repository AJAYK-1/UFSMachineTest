import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const CreateCV = React.lazy(() => import('./pages/createCV'))
const ViewCV = React.lazy(() => import('./pages/viewCV'))
const CVPreview = React.lazy(() => import('./pages/CVPreview'))

function App() {

  return (
    <Routes>
      <Route path='/' element={<ViewCV />} />
      <Route path='/create-a-cv' element={<CreateCV />} />
      <Route path="/preview" element={<CVPreview />} />
    </Routes>
  )
}

export default App
