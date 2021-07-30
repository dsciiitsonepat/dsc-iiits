import './styles/App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Events from "./pages/Events";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation} from 'swiper';
import {useState} from 'react';

SwiperCore.use([Navigation]);
function App() {
  const [slide,setSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const slideTo = (x) => {
      swiper.slideTo(x)
  };

  return (
    <div className="App" style={{backgroundColor:"#f7f7f7"}}>
      <Header setSlide={setSlide} slideTo={slideTo} slide={slide}/>
      <Swiper onSwiper={setSwiper} navigation onSlideChange={(swipe)=>{setSlide(swipe.realIndex)}} style={{width:"100%", height:"100%"}} >
        <SwiperSlide><Home setSlide={setSlide}/></SwiperSlide>
        <SwiperSlide><Team setSlide={setSlide}/></SwiperSlide>
        <SwiperSlide><Events setSlide={setSlide}/></SwiperSlide>
        <SwiperSlide><Contacts setSlide={setSlide}/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
