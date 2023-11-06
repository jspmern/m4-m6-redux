import logo from "./logo.svg";
import style from "./App.module.css";
import Conter from "./Conter";
import FetchData from "./FetchData";
import {CounterNew, NewComp} from "./CounterNew";
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={style.bgcolor}>Redux</h1>
        <br />
          <Conter />
          <br/>
          <hr/>
          <FetchData/>
          <br/>
          <br/>
          <hr/>
          <NewComp/>
         
      </header>
    </div>
  );
}

export default App;
