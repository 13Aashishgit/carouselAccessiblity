import { useState } from 'react'
import CarouselComponent from './CarouselComponent';
import AccessibilityTester from './AccessibilityTester';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>Carousel Accessibility Testing Project</h1>
        <p>Testing react-slideshow-image library for accessibility compliance</p>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Carousel Section */}
        <section className="carousel-section">
          <h2>Image Carousel Implementation</h2>
          <CarouselComponent />
        </section>

        {/* Accessibility Testing Section */}
        <section className="testing-section">
          <AccessibilityTester />
        </section>
      </main>
    </div>
    </>
  )
}

export default App
