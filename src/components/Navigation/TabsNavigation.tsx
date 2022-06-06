
import React from 'react';
import CharatersPage from '../../screens/CharatersPage';
import Test from '../../screens/Test';
import Test2 from '../../screens/Test2';
import { NavigationIconCharater, NavigationIconEpisode, NavigationIconLocation } from '../../assets/images/NavigationIcons/Inactive';
import { NavigationIconActiveCharater, NavigationIconActiveEpisode, NavigationIconActiveLocation } from '../../assets/images/NavigationIcons/Active';
import { Screens } from './NavigationRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../Header/Header';
import { colors } from '../../theme/config';


const Tabs = createBottomTabNavigator()



const TabsNavigation = () => {

  return (
 
      <Tabs.Navigator 
        screenOptions={{
          tabBarActiveTintColor: colors.violet,
          tabBarLabelStyle: {fontWeight: 'bold'},
          tabBarInactiveTintColor: colors.subText
        }}
        >

        <Tabs.Screen name={Screens.CHARATER_SCREEN} component={CharatersPage} options={{
          tabBarLabel: `${Screens.CHARATER_SCREEN}`,
          header: () => {
            return <Header title={Screens.CHARATER_SCREEN}/>
          },
          tabBarIcon: ({focused}) => {
            return focused ? <NavigationIconActiveCharater/> : <NavigationIconCharater/>
        }
        }}/>   

        <Tabs.Screen name={Screens.LOCATIONS_SCREEN} component={Test} options={{
          header: () => {
            return <Header title={Screens.LOCATIONS_SCREEN}/>
          },
          tabBarLabel: `${Screens.LOCATIONS_SCREEN}`,
          tabBarIcon: ({focused}) => {
            return focused ? <NavigationIconActiveLocation/> : <NavigationIconLocation/>
          }          
        }}/>
        

        <Tabs.Screen name={Screens.EPISODE_SCREEN} component={Test2} options={{
          header: () => {
            return <Header title={Screens.EPISODE_SCREEN}/>
          },
          tabBarLabel: `${Screens.EPISODE_SCREEN}`,
          tabBarIcon: ({focused}) => {
            return focused ? <NavigationIconActiveEpisode/> : <NavigationIconEpisode/>
        }
        }}/>

      </Tabs.Navigator>
 
  )

}

export default TabsNavigation;