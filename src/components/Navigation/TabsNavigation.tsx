
import React from 'react';
import CharatersPage from '../../screens/Charaters/CharatersPage';
import { NavigationIconCharater, NavigationIconEpisode, NavigationIconLocation } from '../../assets/images/NavigationIcons/Inactive';
import { NavigationIconActiveCharater, NavigationIconActiveEpisode, NavigationIconActiveLocation } from '../../assets/images/NavigationIcons/Active';
import { Screens } from './NavigationRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../Charaters/Header/CharatersHeader';
import { colors } from '../../theme/config';
import LocationPage from '../../screens/Locations/LocationPage';
import EpisodesPage from '../../screens/Episodes/EpisodesPage';
import CharatersHeader from '../Charaters/Header/CharatersHeader';
import EpisodesHeader from '../Episodes/Header/EpisodesHeader';
import LocationsHeader from '../Locations/Header/LocationsHeader';


const Tabs = createBottomTabNavigator()



const TabsNavigation = () => {

  return (
 
      <Tabs.Navigator 
        screenOptions={{
          tabBarActiveTintColor: colors.violet,
          tabBarLabelStyle: {fontWeight: 'bold'},
          tabBarInactiveTintColor: colors.textNavigaion
        }}
        >

        <Tabs.Screen name={Screens.CHARATER_SCREEN} component={CharatersPage} options={{
          tabBarLabel: `${Screens.CHARATER_SCREEN}`,
          header: () => {
            return <CharatersHeader/>
          },
          tabBarIcon: ({focused}) => {
            return focused ? <NavigationIconActiveCharater/> : <NavigationIconCharater/>
        }
        }}/>   

        <Tabs.Screen name={Screens.LOCATIONS_SCREEN} component={LocationPage} options={{
          header: () => {
            return <LocationsHeader/>
          },
          tabBarLabel: `${Screens.LOCATIONS_SCREEN}`,
          tabBarIcon: ({focused}) => {
            return focused ? <NavigationIconActiveLocation/> : <NavigationIconLocation/>
          }          
        }}/>
        

        <Tabs.Screen name={Screens.EPISODE_SCREEN} component={EpisodesPage} options={{
          header: () => {
            return <EpisodesHeader/>
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
