import './App.css';
import MainContainer from "./Components/MainContainer/Maincontainer";
import CssBaseline from '@material-ui/core/CssBaseline';
import Resuma from "./Components/Resuma/Resuma"
import {
  Route
} from "react-router-dom";

function App() {
  return ( 
    <>
      <CssBaseline />
      <Route exact path="/" component={MainContainer}></Route>
      <Route path="/resuma" component={Resuma}></Route>
    </>
  );
}

export default App;