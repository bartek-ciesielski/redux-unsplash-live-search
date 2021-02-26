import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store';
import { Route, HashRouter } from 'react-router-dom';
import Form from './components/Form/Form.component';
import PhotoList from './components/Photos/photos.component';
import Home from './components/Home/home.component';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/searchResults">
          <Form formClass={'header-form'} />
          <PhotoList />
        </Route>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
