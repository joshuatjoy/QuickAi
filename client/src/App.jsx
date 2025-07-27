import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'

const App = () => {



  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route index path='write-article' element={<WriteArticle />} />
          <Route index path='blog-titles' element={<BlogTitles />} />
          <Route index path='generate-images' element={<GenerateImages />} />
          <Route index path='remove-background' element={<RemoveBackground />} />
          <Route index path='remove-object' element={<RemoveObject />} />
          <Route index path='review-resume' element={<ReviewResume />} />
          <Route index path='community' element={<Community />} />
        </Route>              
      </Routes>
    </div>
  )
}

export default App