import './styles/App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import Team from "./pages/Team";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import Swiper core and required modules
import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);


function App() {
  return (
    <div className="App" style={{backgroundColor:"#f7f7f7"}}>
      <Header/>
      <Swiper
         direction={"horizontal"}
         slidesPerView={1}
         spaceBetween={30}
         mousewheel={true}
         speed={1000}
        style={{width:"100%", height:"100%"}} 
      >
        <SwiperSlide><Home/></SwiperSlide>
        <SwiperSlide><Team/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
