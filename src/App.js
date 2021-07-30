import './styles/App.css';
import Header from './components/Header';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App" style={{backgroundColor:"#f7f7f7"}}>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
