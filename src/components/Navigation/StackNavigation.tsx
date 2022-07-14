import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharatersProfilePage } from 'src/screens/Charaters/CharatersProfilePage';
import { EpisodesCardPage } from 'src/screens/Episodes/EpisodesCardPage';
import { LocationsCardPage } from 'src/screens/Locations/LocationsCardPage';
import { CharatersModal } from 'src/components/Charaters/Filter/CharatersModal';
import { CharatersModalInput } from 'src/components/Charaters/Filter/CharatersModalInput';
import { CharatersModalHeader } from 'src/components/Charaters/Filter/Header/CharatersModalHeader';
import { CharatersModalInputHeader } from 'src/components/Charaters/Filter/Header/CharatersModalInputHeader';
import { CharatersCardHeader } from 'src/components/Charaters/Header/CharatersCardHeader';
import { EpisodesModal } from 'src/components/Episodes/Filter/EpisodesModal';
import { EpisodesModalInput } from 'src/components/Episodes/Filter/EpisodesModalInput';
import { EpisodesModalHeader } from 'src/components/Episodes/Filter/Header/EpisodesModalHeader';
import { EpisodesModalInputHeader } from 'src/components/Episodes/Filter/Header/EpisodesModalInputHeader';
import { EpisodesCardHeader } from 'src/components/Episodes/Header/EpisodesCardHeader';
import { LocationsModalHeader } from 'src/components/Locations/Filter/Header/LocationsModalHeader';
import { LocationsModalInputHeader } from 'src/components/Locations/Filter/Header/LocationsModalInputHeader';
import { LocationsModal } from 'src/components/Locations/Filter/LocationsModal';
import { LocationsModalInput } from 'src/components/Locations/Filter/LocationsModalInput';
import { LocationsCardHeader } from 'src/components/Locations/Header/LocationsCardHeader';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { TabsNavigation } from 'src/components/Navigation/TabsNavigation';
import { CharatersPage } from 'src/screens/Charaters/CharatersPage';
import { CharatersHeader } from '../Charaters/Header/CharatersHeader';
import { LocationPage } from 'src/screens/Locations/LocationPage';
import { LocationsHeader } from '../Locations/Header/LocationsHeader';
import { EpisodesPage } from 'src/screens/Episodes/EpisodesPage';
import { EpisodesHeader } from '../Episodes/Header/EpisodesHeader';

const Stack = createNativeStackNavigator();
const CharaterStack = createNativeStackNavigator();
const LocationStack = createNativeStackNavigator();
const EpisodeStack = createNativeStackNavigator();

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

export const CharatersScreen = () => (
    <CharaterStack.Navigator>
        <CharaterStack.Screen
            name={Screens.CHARATER_SCREEN}
            component={CharatersPage}
            options={{
                header: () => {
                    return <CharatersHeader />;
                },
            }}
        />
        <CharaterStack.Screen
            name={Screens.CHARATER_PROFILE_SCREEN}
            component={CharatersProfilePage}
            options={{
                header: () => <CharatersCardHeader />,
            }}
        />
    </CharaterStack.Navigator>
);

export const LocationScreen = () => (
    <LocationStack.Navigator>
        <LocationStack.Screen
            name={Screens.LOCATIONS_SCREEN}
            component={LocationPage}
            options={{
                header: () => {
                    return <LocationsHeader />;
                },
            }}
        />
        <LocationStack.Screen
            name={Screens.LOCATIONS_CARD_SCREEN}
            options={{
                header: () => <LocationsCardHeader />,
            }}
            component={LocationsCardPage}
        />
    </LocationStack.Navigator>
);

export const EpisodeScreen = () => (
    <EpisodeStack.Navigator>
        <EpisodeStack.Screen
            name={Screens.EPISODE_SCREEN}
            component={EpisodesPage}
            options={{
                header: () => {
                    return <EpisodesHeader />;
                },
            }}
        />
        <EpisodeStack.Screen
            name={Screens.EPISODES_CARD_SCREEN}
            options={{
                header: () => <EpisodesCardHeader />,
            }}
            component={EpisodesCardPage}
        />
    </EpisodeStack.Navigator>
);
