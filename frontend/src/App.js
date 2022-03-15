import React from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"
import {Container} from 'react-bootstrap'
import HomeScreen from './containers/HomeScreen'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductScreen from './containers/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
        <main>
          <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact/>
            <Route path='/product/:id' element={<ProductScreen />} exact />
          </Routes>
          </Container>
        </main>
      <Footer />
    </Router>
  )
}

export default App