import React from 'react';
import { Provider } from 'react-redux';
import './assets/Css/Style.css';
import reduxStore from './store';
import { HomeContainer } from './Container';

const App = () => (
  <Provider store={reduxStore}>
    <div className="App">
      <HomeContainer />
    </div>
  </Provider>
);

export default App;
