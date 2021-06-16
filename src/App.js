import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Repositories from './views/Repositories'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="Navbar">
          <div className="Homepage-link">
            <Link className="Link-title" to="/">Home</Link>
          </div>
        </div>
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
