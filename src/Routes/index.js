import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'Redux/store';
import Main from 'Screens/Main';

 
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route from="/" component={Main} />
      </Router>
    );
  }
}

export default App;
