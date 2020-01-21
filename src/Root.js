import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Quiz from './containers/Quiz'
import Profile from './containers/Profile'
import AnalyzeAlgorithm from './components/AnalyzeAlgorithm'


import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Navbar/>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/analyzeAlgorithm" component={AnalyzeAlgorithm} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root