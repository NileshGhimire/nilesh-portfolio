import './App.css';
import MainContainer from "./Components/MainContainer/MainContainer";
import CssBaseline from '@material-ui/core/CssBaseline';
import Resuma from "./Components/Resuma/Resuma";
import Portfolio from "./Components/Portfolio/Portfolio"
import { Route } from "react-router-dom";
import  Contact  from "./Components/Contact/Contact";
import Navbar from './Components/Navbar/Navbar'
function App() {
  return ( 
    <>
      <CssBaseline />
      <Route exact path="/nilesh-portfolio" component={MainContainer}></Route>
      <Route path="/resuma" component={Resuma}></Route>
      <Route path="/portfolio" component={Portfolio}></Route>
      <Route path="/contact" component={Contact}></Route>
    </>
  );
}

export default App;