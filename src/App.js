import './App.css';
import MainContainer from "./Components/MainContainer/MainContainer";
import CssBaseline from '@material-ui/core/CssBaseline';
import Resuma from "./Components/Resuma/Resuma";
import Portfolio from "./Components/Portfolio/Portfolio"
import { Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
function App() {
  return ( 
    <>
    
      <CssBaseline />
      <Route exact path="/" component={MainContainer}></Route>
      <Resuma />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;