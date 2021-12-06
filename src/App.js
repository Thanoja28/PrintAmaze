
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import LoginContainer from './components/user/AccountBox/LoginContainer';
import Home from './Home';
import SearchContainer from './components/Searchbar/SearchContainer';



class App extends Component {
  render() {
  return (
    <>
     <Router>
       <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/LoginContainer' exact component={LoginContainer} />
        <Route path='/SearchContainer' exact component={SearchContainer} />
      </Switch>
     </Router>
    </>
  );
}
}

export default App;