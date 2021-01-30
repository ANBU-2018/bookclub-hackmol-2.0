import './../css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' render={() => <Login />} />
            <Route path='/signup' render={()=><Signup />} />
        </Switch>
    </Router>
  );
}

export default App;