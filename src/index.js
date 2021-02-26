import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Form from './components/Form/Form.component';
import PhotoList from './components/Photos/photos.component';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <Form formClass={'home-form'} />
        </Route>
        <Route path="/searchResults">
          <Form formClass={'header-form'} />
          <PhotoList />
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
