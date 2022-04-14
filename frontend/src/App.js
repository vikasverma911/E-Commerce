import React from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"
import {Container} from 'react-bootstrap'
import HomeScreen from './containers/HomeScreen'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductScreen from './containers/ProductScreen'
import CartScreen from './containers/CartScreen'
import LoginScreen from './containers/LoginScreen'
import RegisterScreen from './containers/RegisterScreen'
import ProfileScreen from './containers/ProfileScreen'
import ShippingScreen from './containers/ShippingScreen'


const App = () => {
  return (
    <Router>
      <Header />
        <main>
          <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact/>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} exact />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} exact />
          </Routes>
          </Container>
        </main>
      <Footer />
    </Router>
  )
}

export default App