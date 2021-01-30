import './../css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' render={() => <Login />} />
      </Switch>
    </Router>
  );
}

export default App;
