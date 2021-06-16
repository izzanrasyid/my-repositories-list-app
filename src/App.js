import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Repositories from './views/Repositories'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/repository'>
            <Repositories />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
