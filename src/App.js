
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResults from './components/SearchResults/SearchResults';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={SearchBox} />
        <Route exact path='/items' component={SearchResults} />
        <Route exact path='/items/:id' component={ProductDetail} />
      </Router>
    </Provider>
  );
}

export default App;
