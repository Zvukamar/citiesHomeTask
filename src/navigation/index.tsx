import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';

import CitiesGridScreen from './CitiesGridScreen';
import CityDetailsScreen from './CityDetailsScreen';
import { CityType } from '../utils/types';

type RootStackParamList = {
    Main: undefined,
    CityDetails: { city: CityType };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNaivgation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={CitiesGridScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CityDetails"
                    component={CityDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNaivgation;

// Home Screen
export type MainScreenNavigationProp = NavigationProp<RootStackParamList, 'Main'>;