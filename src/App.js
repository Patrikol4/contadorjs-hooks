import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import MainPage from './components/pages/MainPage/MainPage';
import Countdown from './components/pages/CounterPage/CounterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/counter" component={Countdown}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
