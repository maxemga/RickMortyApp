import React from 'react';
import { CharatersPage } from '../../screens/Charaters/CharatersPage';
import { Screens } from './NavigationRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../theme/config';
import { LocationPage } from '../../screens/Locations/LocationPage';
import { EpisodesPage } from '../../screens/Episodes/EpisodesPage';
import { CharatersHeader } from '../Charaters/Header/CharatersHeader';
import { LocationsHeader } from '../Locations/Header/LocationsHeader';
import { EpisodesHeader } from '../Episodes/Header/EpisodesHeader';
import { NavigationIconActiveCharater } from '../icons/NavigationIcons/Active/CharaterIconActive';
import { NavigationIconActiveEpisode } from '../icons/NavigationIcons/Active/EpisodeIconActive';
import { NavigationIconActiveLocation } from '../icons/NavigationIcons/Active/LocationIconActive';
import { NavigationIconCharater } from '../icons/NavigationIcons/Inactive/CharaterIconinactive';
import { NavigationIconEpisode } from '../icons/NavigationIcons/Inactive/EpisodeconInactive';
import { NavigationIconLocation } from '../icons/NavigationIcons/Inactive/LocationIconInactive';

const Tabs = createBottomTabNavigator();

export const TabsNavigation = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.violet,
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
                    tabBarIcon: ({ focused }) => {
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
                    tabBarIcon: ({ focused }) => {
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
                    tabBarIcon: ({ focused }) => {
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
