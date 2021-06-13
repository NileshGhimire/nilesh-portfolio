import './App.css';
import MainContainer from "./Components/MainContainer/MainContainer";
import CssBaseline from '@material-ui/core/CssBaseline';
import Resuma from "./Components/Resuma/Resuma";
import Portfolio from "./Components/Portfolio/Portfolio"
import { Route,Switch } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
function App() {
  return ( 
    <>
    
      <CssBaseline />
      <Switch>
      <Route exact path="/" component={MainContainer}></Route>
      <Route path="/resuma" component={Resuma}></Route>
      <Route path="/portfolio" component={Portfolio}></Route>
      <Route path="/contact" component={Contact}></Route>
      </Switch>
    </>
  );
}

export default App;