import React from "react";
import SpikesLanding from "./components/SpikesLanding";



export default function Landing() {
  return (
    <section className="container-css section-height">
      
      <div className="row hero-row align-items-center">
        <div className="icom-landing col-md-4">
          <div className="icom-info">
            <div className="title">
              <h1> إمكان | Emkan </h1>
              <h3>نسعى في إمكان لتلبية احتياجاتك التمويلية عبر آلية عمل هي الأسهل والأسرع، لنكون خيارك الأفضل</h3>
            </div>
          </div>
          
        </div>
        <div id="carouselExampleControls" className="carousel slide col-md-8" data-bs-ride="carousel" >
          <div className="carousel-inner" >
            <div className="carousel-item active" data-bs-interval="2000">
              <img src={require('./assets/image/1.jpg')} rel="preload" as="image" alt={'img'} className={'img-fluid hero-car'} />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={require('./assets/image/2.jpg')} rel="preload" as="image" alt={'img'} className={'img-fluid hero-car'} />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={require('./assets/image/3.jpg')} rel="preload" as="image" alt={'img'} className={'img-fluid hero-car'} />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={require('./assets/image/4.jpg')} rel="preload" as="image" alt={'img'} className={'img-fluid hero-car'} />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={require('./assets/image/5.jpg')} rel="preload" as="image" alt={'img'} className={'img-fluid hero-car'} />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={require('./assets/image/6.jpg')} rel="preload" as="image" alt={'img'} className={'img-fluid hero-car'} />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={require('./assets/image/7.jpg')} rel="preload" as="image" alt={'img'} className={'img-fluid hero-car'} />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={require('./assets/image/8.jpg')} rel="preload" as="image" alt={'img'} className={'img-fluid hero-car'} />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={require('./assets/image/9.jpg')} rel="preload" as="image" alt={'img'} className={'img-fluid hero-car'} />
            </div>
          </div>
          
        </div>
        
      </div>
      <SpikesLanding/>
      <a href="#contact-us" className="projects">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>


    </section>
    
  );
}
