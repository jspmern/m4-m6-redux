import logo from "./logo.svg";
import style from "./App.module.css";
import Conter from "./Conter";
import FetchData from "./FetchData";
import {CounterNew, NewComp} from "./CounterNew";
import CustomHook from "./CustomHook";
import CustomHook2 from "./CustomHook2";
import CustomHook3 from "./CustomHook3";
import Contact from "./Contact";
import Delete from "./Delete";
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={style.bgcolor}>Redux</h1>
        <br />
        <CustomHook/>
        <CustomHook2/>
        <CustomHook3/>
        <Contact/>
        <Delete/>
          {/* <Conter />
          <br/>
          <hr/>
          <FetchData/>
          <br/>
          <br/>
          <hr/>
          <NewComp/> */}
         
      </header>
    </div>
  );
}

export default App;
