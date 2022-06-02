import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TabsNavigation from './components/Navigation/TabsNavigation';
import StackNavigation from './components/Navigation/StackNavigation';


const Tabs = createMaterialBottomTabNavigator();

const App = () => {

  return (
    <StackNavigation/>
  )

}

export default App;
