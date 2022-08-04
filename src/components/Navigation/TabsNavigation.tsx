import React, { useContext } from 'react';
import { Screens } from './NavigationRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from 'src/theme/config';
import { NavigationIconActiveCharater } from 'src/components/icons/NavigationIcons/Active/CharaterIconActive';
import { NavigationIconActiveEpisode } from 'src/components/icons/NavigationIcons/Active/EpisodeIconActive';
import { NavigationIconActiveLocation } from 'src/components/icons/NavigationIcons/Active/LocationIconActive';
import { NavigationIconCharater } from 'src/components/icons/NavigationIcons/Inactive/CharaterIconinactive';
import { NavigationIconEpisode } from 'src/components/icons/NavigationIcons/Inactive/EpisodeconInactive';
import { NavigationIconLocation } from 'src/components/icons/NavigationIcons/Inactive/LocationIconInactive';
import { CharatersScreen, EpisodeScreen, LocationScreen } from './StackNavigation';
import { ThemeContext } from 'src/context/themeContext';
import { IThemeContext, ITypeModalContext } from 'src/type/types';

const Tabs = createBottomTabNavigator();

export const TabsNavigation = () => {
    const { isDarkMode } = useContext<IThemeContext>(ThemeContext);

    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.violet,
                tabBarInactiveTintColor: colors.silver.bright,
                tabBarStyle: {
                    backgroundColor: isDarkMode ? colors.black.bright : colors.white.dim,
                },
            }}>
            <Tabs.Screen
                name={Screens.CHARATER_SCREEN}
                component={CharatersScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: `${Screens.CHARATER_SCREEN}`,
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
                component={LocationScreen}
                options={{
                    headerShown: false,
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
                component={EpisodeScreen}
                options={{
                    headerShown: false,
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
