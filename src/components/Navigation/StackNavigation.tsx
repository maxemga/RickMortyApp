import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharatersProfilePage } from '../../screens/Charaters/CharatersProfilePage';
import { EpisodesCardPage } from '../../screens/Episodes/EpisodesCardPage';
import { LocationsCardPage } from '../../screens/Locations/LocationsCardPage';
import { CharatersModal } from '../Charaters/Filter/CharatersModal';
import { CharatersModalInput } from '../Charaters/Filter/CharatersModalInput';
import { CharatersModalHeader } from '../Charaters/Filter/Header/CharatersModalHeader';
import { TabsNavigation } from './TabsNavigation';
import { colors } from '../../theme/config';
import { Screens } from './NavigationRoutes';
import { CharatersModalInputHeader } from '../Charaters/Filter/Header/CharatersModalInputHeader';
import { LocationsModal } from '../Locations/Filter/LocationsModal';
import { LocationsModalHeader } from '../Locations/Filter/Header/LocationsModalHeader';
import { LocationsModalInput } from '../Locations/Filter/LocationsModalInput';
import { LocationsModalInputHeader } from '../Locations/Filter/Header/LocationsModalInputHeader';
import { EpisodesModal } from '../Episodes/Filter/EpisodesModal';
import { EpisodesModalHeader } from '../Episodes/Filter/Header/EpisodesModalHeader';
import { EpisodesModalInputHeader } from '../Episodes/Filter/Header/EpisodesModalInputHeader';
import { EpisodesModalInput } from '../Episodes/Filter/EpisodesModalInput';
import { EpisodesCardHeader } from '../Episodes/Header/EpisodesCardHeader';
import { CharatersCardHeader } from '../Charaters/Header/CharatersCardHeader';
import { LocationsCardHeader } from '../Locations/Header/LocationsCardHeader';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Screens.CHARATER_SCREEN}>
                <Stack.Group
                    screenOptions={{
                        presentation: 'modal',
                        animation: 'slide_from_bottom',
                        contentStyle: { backgroundColor: 'white' },
                        headerBackVisible: true,
                        headerBackButtonMenuEnabled: true,
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
                <Stack.Group
                    screenOptions={{
                        headerTintColor: colors.violet,
                        headerBackVisible: true,
                        headerBackButtonMenuEnabled: true,
                    }}>
                    <Stack.Screen
                        name={Screens.EPISODES_CARD_SCREEN}
                        options={{
                            header: () => <EpisodesCardHeader />,
                        }}
                        component={EpisodesCardPage}
                    />
                    <Stack.Screen
                        name={Screens.CHARATER_PROFILE_SCREEN}
                        options={{
                            header: () => <CharatersCardHeader />,
                        }}
                        component={CharatersProfilePage}
                    />
                    <Stack.Screen
                        name={Screens.LOCATIONS_CARD_SCREEN}
                        options={{
                            header: () => <LocationsCardHeader />,
                        }}
                        component={LocationsCardPage}
                    />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name={Screens.CHARATER_SCREEN}
                        component={TabsNavigation}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
