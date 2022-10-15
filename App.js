import React from 'react';
import { WeatherContextProvider } from './src/context/WeatherContext';
import AppNavigator from './src/navigation/index';

const App = () => {

  return (
    <WeatherContextProvider >
      <AppNavigator />
    </WeatherContextProvider>


  )
}

export default App


