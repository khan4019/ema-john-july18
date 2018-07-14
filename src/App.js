import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Review from './components/Review/Review';
import Orders from './components/Orders/Orders';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Router>
         <div>
           <Route exact path="/" component={Shop}/>
           <Route path="/shop" component={Shop}/>
           <Route path="/review" component ={Review}/>
           <Route path="/orders" component={Orders}/>
         </div>
      </Router>
      </div>
    );
  }
}

export default App;
