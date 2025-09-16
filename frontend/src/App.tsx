

import './App.css'
import BlogCard from './components/BlogCard'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'

import SignUpPage from './components/Auth/SignUp'
import LoginPage from './components/Auth/Login'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<main className='py-3 max-w-2xl m-auto'>
      <Header logoName='Blog' login='Login' signup='SignUp'/>
      <div className='blog flex flex-col items-center  container'>
        <BlogCard title='my new blog' img='https://unsplash.com/photos/iced-coffee-and-a-bag-of-beans-on-a-wooden-table-iZPRqQDxypQ' data='this is a new blog'/>
      </div>
    </main>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignUpPage />}/>


        
    
      
    </Routes>
  )
}

export default App
