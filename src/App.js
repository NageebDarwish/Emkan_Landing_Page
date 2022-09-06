import React, { lazy,Suspense  } from "react";
const Header = lazy(() => import ("./components/Header"));
const Landing = lazy(() => import ("./Landing"));
const Contact = lazy(() => import ("./ContactFrom"));
const HeadLine = lazy(() => import ("./HeadLine"));
const Spikes = lazy(() => import ("./components/Spikes"));
const Services = lazy(() => import ("./Services"));
const Footer = lazy(() => import ("./components/Footer"));
const FooterRights = lazy(() => import ("./components/FooterRights"));
const WA = lazy(() => import ("./components/WA"));






export default function App() {
  
  return (
    <Suspense fallback={<div>جاري التحميل... </div>}>
    <div className="father">
      
        <Header />
        <Landing />
      <div className="container-css">
        <Contact />
        <HeadLine />
      </div>
      <Spikes/>
      <Services/>
      <Footer/>
      <FooterRights/>
      <WA />
    </div>
    </Suspense>
  );
}
