
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CharatersPage from './screens/CharatersPage';
import Test from './screens/Test';
import Test2 from './screens/Test2';
import { NavigationIcon1 } from './assets/images/NavigationIcons/1';


const Tabs = createMaterialBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tabs.Navigator activeColor="#f0edf6">
        <Tabs.Screen name='Charaters' component={CharatersPage} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <NavigationIcon1/>
          ),
        }}/>   
        <Tabs.Screen name='Location' component={Test}/>
        <Tabs.Screen name='Episode' component={Test2}/>
      </Tabs.Navigator>
    </NavigationContainer>
  )

};


export default App;
