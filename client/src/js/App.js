import './../css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Genre from './Genre';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' render={() => <Login />} />
            <Route path='/signup' render={()=><Signup />} />
            <Route path='/genre' render={()=><Genre />} />
        </Switch>
    </Router>
  );
}

export default App;