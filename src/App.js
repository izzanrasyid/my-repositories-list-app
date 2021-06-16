import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Repositories from './views/Repositories'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Repositories />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
