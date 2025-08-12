import React, { useState, useRef, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './CarouselComponent.css';


const slides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    title: 'Nature Landscape',
    description: 'Beautiful mountain scenery with clear blue skies'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    title: 'Forest Path',
    description: 'Peaceful walking trail through green forest'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop',
    title: 'Ocean View',
    description: 'Stunning coastal view with crystal clear water'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=400&fit=crop',
    title: 'Desert Sunset',
    description: 'Golden hour in vast desert landscape'
  }
];

const CarouselComponent = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef();


  const settings = {
    duration: 4000,
    transitionDuration: 600,
    infinite: true,
    indicators: false,
    arrows: true, // Enable built-in arrows
    autoplay: !paused,
    pauseOnHover: true,
    onChange: (_, next) => setActive(next)
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        ref.current && ref.current.goBack();
      } else if (e.key === 'ArrowRight') {
        ref.current && ref.current.goNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const go = idx => ref.current && ref.current.goTo(idx);

  return (
    <div className="my-carousel-wrapper">
      <div className="carousel-nav-buttons">
        <button onClick={() => ref.current && ref.current.goBack()} className="nav-button prev-button" aria-label="Go to previous slide">← Previous</button>
        <button onClick={() => setPaused(p => !p)} className="nav-button pause-play-button" aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>{paused ? 'Play' : 'Pause'}</button>
        <button onClick={() => ref.current && ref.current.goNext()} className="nav-button next-button" aria-label="Go to next slide">Next →</button>
      </div>
      <div className="slideshow-container">
        <Slide ref={ref} {...settings}>
          {slides.map((s, i) => (
            <div key={i} className="individual-slide">
              <img src={s.imageUrl} alt={s.description} className="slide-image" />
              <div className="slide-text-content">
                <h2 className="slide-heading">{s.title}</h2>
                <p className="slide-text">{s.description}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="slide-indicators">
        <span className="indicator-label">Slide: </span>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`indicator-dot ${i === active ? 'active-indicator' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="slide-counter">
        Showing slide {active + 1} of {slides.length}
      </div>
    </div>
  );
};

export default CarouselComponent;