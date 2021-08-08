import './styles/App.css';
import './styles/BgCircle.css';
import './styles/Logo.css';
import Header from './components/Header';
import React from 'react';
import Home from "./pages/Home";
import Team from "./pages/Team";
import logo from "./assets/dsc-logo.png";
import userLogo from "./assets/users.png";
import eventLogo from "./assets/events.png";
import contactLogo from "./assets/contact.png";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {Mousewheel,Pagination} from 'swiper/core';
import {useState,useEffect} from 'react';
SwiperCore.use([Mousewheel,Pagination]);

function App() {
  const LogoPaths = [logo,userLogo,eventLogo,contactLogo]
  const [circleState, setBG] = React.useState(0)
  const [logoState, setLogo] = React.useState(0)
  const [logoPath, setLogoPath] = React.useState(0)
  const [slide,setSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const slideTo = (x) => {
      swiper.slideTo(x)
  };
  const setAnimation = (x) => {
        setBG(swiper.realIndex + 1);
        setLogo(swiper.realIndex + 1);
        setLogoPath(swiper.realIndex);
  }

  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const setResponsive = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsive();
    window.addEventListener("resize", setResponsive);
    return () => {
      window.removeEventListener("resize", setResponsive);
    };
  }, []);

  const desktopApp = () => {
    return (
      <>
      <div className="bg" style={{ borderRadius: "100%" }} circleState = {circleState}>
            <div className="logo-dsc" style={{ backgroundColor: "#f0f0f0" }} logoState = {logoState}>
              <img src={LogoPaths[logoPath]} alt="logo" style={{ width: "100%" } }></img>
            </div>
          </div>  
      <Header setSlide={setSlide} slideTo={slideTo} slide={slide}/>
      <Swiper
         direction={mobileView ? "vertical" : "horizontal"}
         slidesPerView={1}
         spaceBetween={30}
         mousewheel={true}
         speed={1000}
         onSwiper={setSwiper}
         onSlideChange={(swipe)=>{setSlide(swipe.realIndex); setAnimation();}} 
        style={{width:"100%", height:"100%"}} 
      >
        <SwiperSlide><Home /></SwiperSlide>
        <SwiperSlide><Team /></SwiperSlide>
        <SwiperSlide><Events /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
      </Swiper>
      </>
    );
  }


  //JUST TO TEST [TODO] REMOVE IN PRODUCTION
  const mobileApp = () => {
    return (
      // <div className="bg" style={{ borderRadius: "100%" }} circleState = {circleState}>
        <div className="mob-logo-dsc" style={{ backgroundColor: "#f0f0f0" }} logoState = {logoState}>
          <img src={LogoPaths[logoPath]} alt="logo" style={{ width: "100%" } }></img>
          {/* <p>Hello</p> */}
        {/* </div> */}
      </div>
    )
  }


  return (
    <div className="App" style={{backgroundColor:"#f7f7f7"}}>
      {desktopApp()}
    </div>
  );
}

export default App;
