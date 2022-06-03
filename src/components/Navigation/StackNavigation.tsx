import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Test from '../../screens/Test';
import Test2 from '../../screens/Test2';
import CharatersComponent from '../Charaters/CharatersComponent';
import { Screens } from './NavigationRoutes';
import TabsNavigation from './TabsNavigation';



const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={Screens.CHARATER_SCREEN}>    
            <Stack.Group>
                <Stack.Screen name="Home" component={CharatersComponent} />
                <Stack.Screen name="Details" component={Test} />
                <Stack.Screen name="fsfaf" component={Test2} /> 
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen options={{ headerShown: false }} name={Screens.CHARATER_SCREEN} component={TabsNavigation} />
            </Stack.Group>  
    </Stack.Navigator>
    </NavigationContainer>
  )

}

export default StackNavigation;
