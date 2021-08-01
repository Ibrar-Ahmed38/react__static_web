import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Services from "./Components/Services";
import './App.css';
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Route  path="*" component={()=><h1>Page Not Found</h1>}/>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;