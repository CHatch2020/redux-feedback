import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Feeling from './Feeling/Feeling';
import Understand from './Understand/Understand';
import Support from './Support/Support';
import Comments from './Comments/Comments';
import Review from './Review/Review';
import Success from './Success/Success';
import Admin from '../Admin/Admin';


function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path="/">
          <Feeling />
        </Route>

        <Route exact path="/understand">
          <Understand />
        </Route>

        <Route exact path="/support">
          <Support />
        </Route>

        <Route exact path="/comments">
          <Comments />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/success">
          <Success />
        </Route>

        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>

    </div>
  );
}

export default App;
