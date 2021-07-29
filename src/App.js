import logo from './assets/logo1.JPG';
import inprog from './logo.svg'
import './styles/App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#f7f7f7"}}>
      <img src={logo}></img>
      <div className="inProg">
        <img src={inprog}></img>
        <h2>In Progress</h2>
      </div>
    </div>
  );
}

export default App;
