import React from 'react';
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
    <div>
      <header className="bg-blue-400 text-center py-6 text-3xl m-4">
        <h1 className="text-blue-100 ">Feedback!</h1>
        <h4 className="underline">Don't forget it!</h4>
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
