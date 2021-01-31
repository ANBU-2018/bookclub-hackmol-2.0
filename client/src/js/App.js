import './../css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Genre from './Genre';
import Home from './Home';
import Books from './Books';
import Chapter from './Chapter';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Login />} />
        <Route path='/signup' render={() => <Signup />} />
        <Route path='/home' render={() => <Home />} />
        <Route path='/genre' render={() => <Genre />} />
        <Route path='/chapter/:id' component={Chapter} />
        <Route path='/books/:id' component={Books} />
      </Switch>
    </Router>
  );
}

export default App;