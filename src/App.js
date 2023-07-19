import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
} from './pages'
import PrivateRoutes from './utils/PrivateRoutes'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import { AuthProvider } from './utils/AuthContext'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<PrivateRoutes />}>
            <Route path='checkout' element={<Checkout />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  )
}

export default App
