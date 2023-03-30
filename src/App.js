import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Modules from './components/Modules'
import Instructor from './components/Instructor'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/modules" component={Modules} />
    <Route exact path="/instructor" component={Instructor} />
  </Switch>
)

export default App
