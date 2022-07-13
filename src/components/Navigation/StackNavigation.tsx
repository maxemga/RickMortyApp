import React, {useContext} from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharatersProfilePage} from '../../screens/Charaters/CharatersProfilePage';
import {EpisodesCardPage} from '../../screens/Episodes/EpisodesCardPage';
import {LocationsCardPage} from '../../screens/Locations/LocationsCardPage';
import {CharatersModal} from '../Charaters/Filter/CharatersModal';
import {CharatersModalInput} from '../Charaters/Filter/CharatersModalInput';
import {CharatersModalHeader} from '../Charaters/Filter/Header/CharatersModalHeader';
import {TabsNavigation} from './TabsNavigation';
import {colors} from '../../theme/config';
import {Screens} from './NavigationRoutes';
import {CharatersModalInputHeader} from '../Charaters/Filter/Header/CharatersModalInputHeader';
import {LocationsModal} from '../Locations/Filter/LocationsModal';
import {LocationsModalHeader} from '../Locations/Filter/Header/LocationsModalHeader';
import {LocationsModalInput} from '../Locations/Filter/LocationsModalInput';
import {LocationsModalInputHeader} from '../Locations/Filter/Header/LocationsModalInputHeader';
import {EpisodesModal} from '../Episodes/Filter/EpisodesModal';
import {EpisodesModalHeader} from '../Episodes/Filter/Header/EpisodesModalHeader';
import {EpisodesModalInputHeader} from '../Episodes/Filter/Header/EpisodesModalInputHeader';
import {IActiveDataContext} from '../../type/types';
import {ActiveDataContext} from '../../context/activeData';
import { EpisodesModalInput } from '../Episodes/Filter/EpisodesModalInput';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const {
    charatersCardActiveName,
    episodesCardActiveName,
    locationsCardActiveName,
  } = useContext<IActiveDataContext>(ActiveDataContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.CHARATER_SCREEN}>
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            contentStyle: {backgroundColor: 'white'},
          }}>
          <Stack.Screen
            name={Screens.CHARATER_MODAL}
            component={CharatersModal}
            options={{
              header: () => <CharatersModalHeader />,
            }}
          />
          <Stack.Screen
            name={Screens.CHARATER_MODAL_INPUT}
            component={CharatersModalInput}
            options={{
              header: () => <CharatersModalInputHeader />,
            }}
          />
          <Stack.Screen
            name={Screens.LOCATIONS_MODAL}
            component={LocationsModal}
            options={{
              header: () => <LocationsModalHeader />,
            }}
          />
          <Stack.Screen
            name={Screens.LOCATIONS_MODAL_INPUT}
            component={LocationsModalInput}
            options={{
              header: () => <LocationsModalInputHeader />,
            }}
          />
          <Stack.Screen
            name={Screens.EPISODES_MODAL}
            component={EpisodesModal}
            options={{
              header: () => <EpisodesModalHeader />,
            }}
          />
          <Stack.Screen
            name={Screens.EPISODES_MODAL_INPUT}
            component={EpisodesModalInput}
            options={{
              header: () => <EpisodesModalInputHeader />,
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{headerTintColor: colors.violet}}>
          <Stack.Screen
            name={Screens.EPISODES_CARD_SCREEN}
            options={{
              headerTitle: episodesCardActiveName,
              headerTitleStyle: {color: colors.blue.dark},
            }}
            component={EpisodesCardPage}
          />
          <Stack.Screen
            name={Screens.CHARATER_PROFILE_SCREEN}
            options={{
              headerTitle: charatersCardActiveName,
              headerTitleStyle: {color: colors.blue.dark},
            }}
            component={CharatersProfilePage}
          />
          <Stack.Screen
            name={Screens.LOCATIONS_CARD_SCREEN}
            options={{
              headerTitle: locationsCardActiveName,
              headerTitleStyle: {color: colors.blue.dark},
            }}
            component={LocationsCardPage}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            options={{headerShown: false}}
            name={Screens.CHARATER_SCREEN}
            component={TabsNavigation}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
