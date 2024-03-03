// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Weather from './src/component/Weather';

export default function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}
