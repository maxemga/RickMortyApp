import React, { useEffect } from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharatersProfilePage from '../../screens/Charaters/CharatersProfilePage';
import EpisodesCardPage from '../../screens/Episodes/EpisodesCardPage';
import LocationsCardPage from '../../screens/Locations/LocationsCardPage';
import CharatersModal from '../Charaters/Filter/CharatersModal';
import CharatersModalName from '../Charaters/Filter/CharatersModalName';
import CharatersModalHeader from '../Charaters/Filter/Header/CharatersModalHeader';
import TabsNavigation from './TabsNavigation';
import { colors } from '../../theme/config';
import { Screens } from './NavigationRoutes';
import CharatersModalNameHeader from '../Charaters/Filter/Header/CharatersModalNameHeader';
import CharatersModalSpecies from '../Charaters/Filter/CharatersModalSpecies';
import CharatersModalSpeciesHeader from '../Charaters/Filter/Header/CharatersModalSpeciesHeader';




const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={Screens.CHARATER_SCREEN}>   
            <Stack.Group screenOptions={{ presentation: 'modal', contentStyle: {backgroundColor: 'white'} }}>
                <Stack.Screen name={Screens.CHARATER_MODAL} component={CharatersModal} options={{               
                    header: () => <CharatersModalHeader/>              
                  }}></Stack.Screen>
                <Stack.Screen name={Screens.CHARATER_MODAL_NAME} component={CharatersModalName} options={{
                  header: () => <CharatersModalNameHeader/>
                }}></Stack.Screen>
                <Stack.Screen name={Screens.CHARATER_MODAL_SPECIES} component={CharatersModalSpecies} options={{
                  header: () => <CharatersModalSpeciesHeader/>
                }}></Stack.Screen>
            </Stack.Group>
            <Stack.Group  screenOptions={{
                headerTintColor: colors.violet
                // ,contentStyle: {backgroundColor: 'white'}
              }}>
                <Stack.Screen name={Screens.EPISODES_CARD_SCREEN} component={EpisodesCardPage} />
                <Stack.Screen name={Screens.CHARATER_PROFILE_SCREEN} component={CharatersProfilePage} />
                <Stack.Screen name={Screens.LOCATIONS_CARD_SCREEN} component={LocationsCardPage} />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen options={{ headerShown: false }} name={Screens.CHARATER_SCREEN} component={TabsNavigation} />
            </Stack.Group>  
    </Stack.Navigator>
    </NavigationContainer>
  )

}

export default StackNavigation;
