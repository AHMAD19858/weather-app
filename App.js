import React, { useEffect, useState } from 'react';
import { WeatherContextProvider } from './src/context/WeatherContext';
import AppNavigator from './src/navigation/index';
import { EventRegister } from 'react-native-event-listeners';
import { THEME } from './src/constants';
const App = () => {
  const [mode, setMode] = useState(false)

  useEffect(() => {
    let event = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data)
      console.log("data", data)
    });
    return () => {
      EventRegister.removeEventListener(event)
    }
  }, [])
  return (
    <WeatherContextProvider value={mode === true ? THEME.dark : THEME.dark}>
      <AppNavigator />
    </WeatherContextProvider>


  )
}

export default App


