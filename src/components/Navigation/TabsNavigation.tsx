import React, { useContext } from 'react';
import {CharatersPage} from '../../screens/Charaters/CharatersPage';
import {Screens} from './NavigationRoutes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../theme/config';
import {LocationPage} from '../../screens/Locations/LocationPage';
import {EpisodesPage} from '../../screens/Episodes/EpisodesPage';
import {CharatersHeader} from '../Charaters/Header/CharatersHeader';
import {EpisodesHeader} from '../Episodes/Header/EpisodesHeader';
import {LocationsHeader} from '../Locations/Header/LocationsHeader';
import { NavigationIconActiveCharater } from '../../assets/images/NavigationIcons/Active/CharaterIconActive';
import { NavigationIconCharater } from '../../assets/images/NavigationIcons/Inactive/CharaterIconinactive';
import { NavigationIconActiveLocation } from '../../assets/images/NavigationIcons/Active/LocationIconActive';
import { NavigationIconLocation } from '../../assets/images/NavigationIcons/Inactive/LocationIconInactive';
import { NavigationIconActiveEpisode } from '../../assets/images/NavigationIcons/Active/EpisodeIconActive';
import { NavigationIconEpisode } from '../../assets/images/NavigationIcons/Inactive/EpisodeconInactive';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tabs = createBottomTabNavigator();

export const TabsNavigation = () => {
  /* FIXME: неправильно сделана навигация
    Первый таб - Stack с персонажем(главная с персонажем, детальный персонаж)
    следующие табы аналогично
    https://reactnavigation.org/docs/nesting-navigators/
  */
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.violet,
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarInactiveTintColor: colors.silver.bright,
      }}>

      <Tabs.Screen
        name={Screens.CHARATER_SCREEN}
        component={CharatersPage}
        options={{
          tabBarLabel: `${Screens.CHARATER_SCREEN}`,
          header: () => {
            return <CharatersHeader />;
          },
          tabBarIcon: ({focused}) => {
            return focused ? (
              <NavigationIconActiveCharater />
            ) : (
              <NavigationIconCharater />
            );
          },
        }}
      /> 
   
      <Tabs.Screen
        name={Screens.LOCATIONS_SCREEN}
        component={LocationPage}
        options={{
          header: () => {
            return <LocationsHeader />;
          },
          tabBarLabel: `${Screens.LOCATIONS_SCREEN}`,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <NavigationIconActiveLocation />
            ) : (
              <NavigationIconLocation />
            );
          },
        }}
      />

      <Tabs.Screen
        name={Screens.EPISODE_SCREEN}
        component={EpisodesPage}
        options={{
          header: () => {
            return <EpisodesHeader />;
          },
          tabBarLabel: `${Screens.EPISODE_SCREEN}`,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <NavigationIconActiveEpisode />
            ) : (
              <NavigationIconEpisode />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};
