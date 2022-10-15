import React from 'react';
import Home from '../screens/Home/index';
import CityDetails from '../screens/CityDetails/index';
import AddCity from '../screens/AddCity/index';
import Splash from '../screens/Splash/index';
import CityHistoricalData from '../screens/CityHistoricalData/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      {/* declaring the stack of app screens */}
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="details" component={CityDetails} options={{ headerShown: false }} />
        <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="history" component={CityHistoricalData} options={{ headerShown: false }} />
        <Stack.Screen name="addCity" component={AddCity} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}




export default App;



