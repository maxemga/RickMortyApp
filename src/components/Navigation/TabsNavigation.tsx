
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colors } from '../../theme/colors';
import CharatersPage from '../../screens/CharatersPage';
import Test from '../../screens/Test';
import Test2 from '../../screens/Test2';
import { NavigationIconCharater, NavigationIconEpisode, NavigationIconLocation } from '../../assets/images/NavigationIcons/Inactive';
import { NavigationIconActiveCharater, NavigationIconActiveEpisode, NavigationIconActiveLocation } from '../../assets/images/NavigationIcons/Active';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from './NavigationRoutes';
import CharatersHeader from '../Charaters/CharatersHeader';
import StackNavigation from './StackNavigation';
import { Text } from 'react-native';





const Tabs = createMaterialBottomTabNavigator();

const TabsNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
  
      <Tabs.Navigator 
        activeColor={colors.violet} 
        inactiveColor={colors.subText}
        barStyle={{ backgroundColor: 'rgba(248, 248, 248, 0.92)' }}
        >

        <Tabs.Screen name={Screens.CHARATER_SCREEN} component={CharatersPage} options={{

          tabBarLabel: `${Screens.CHARATER_SCREEN}`,
          tabBarIcon: ({focused}) => {
            return focused ? <NavigationIconActiveCharater/> : <NavigationIconCharater/>
        },
        }}/>   

        <Tabs.Screen name={Screens.LOCATIONS_SCREEN} component={Test} options={{
          
          tabBarLabel: `${Screens.LOCATIONS_SCREEN}`,
          tabBarIcon: ({focused}) => {
            return focused ? <NavigationIconActiveLocation/> : <NavigationIconLocation/>
          },
          
        }}/>
        

        <Tabs.Screen name={Screens.EPISODE_SCREEN} component={Test2} options={{
          tabBarLabel: `${Screens.EPISODE_SCREEN}`,
          
          tabBarIcon: ({focused}) => {
            return focused ? <NavigationIconActiveEpisode/> : <NavigationIconEpisode/>
        },
        }}/>

      </Tabs.Navigator>
     
  )

}

export default TabsNavigation;
