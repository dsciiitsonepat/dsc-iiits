import './styles/App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import Team from "./pages/Team";
import HorizontalScroll from 'react-scroll-horizontal';


function App() {
  return (
    <div className="App" style={{backgroundColor:"#f7f7f7"}}>
      <Header/>
      <HorizontalScroll>
        <div className="main"><Home/></div>
        <div className="main"><Team/></div>
      </HorizontalScroll>
    </div>
  );
}

export default App;
