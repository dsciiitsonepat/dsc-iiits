import './styles/App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import Team from "./pages/Team";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination} from 'swiper';

SwiperCore.use([Navigation, Pagination]);
function App() {
  return (
    <div className="App" style={{backgroundColor:"#f7f7f7"}}>
      <Header/>
      <Swiper navigation pagination onSwiper={(swipe)=>console.log(swipe)} style={{width:"100%", height:"100%"}} >
        <SwiperSlide><Home/></SwiperSlide>
        <SwiperSlide><Team/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
