import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './NavMenu/NavMenu';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Router>
     <NavMenu></NavMenu>
       <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/about">
          <About></About>
         </Route>
         <Route path="/projects">
          <Projects></Projects>
         </Route>
         <Route  path="/contact">
          <Contact></Contact>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
