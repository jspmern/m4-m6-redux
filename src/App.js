import logo from "./logo.svg";
import "./App.css";
import Conter from "./Conter";
import FetchData from "./FetchData";
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux</h1>
        <br />
          <Conter />
          <br/>
          <hr/>
          <FetchData/>
         
      </header>
    </div>
  );
}

export default App;
