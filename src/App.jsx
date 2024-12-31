import { useState } from 'react'
import Header from '../src/components/header'
import HeroSection from './components/main'
import ProductGrid from './components/product'
import Card from './components/card'
import Footer from './components/footer'

function App() {


  return (
    <>
      <Header />
      <HeroSection />
      <ProductGrid />
      <Card />
      <Footer />
    </>
  )
}

export default App
