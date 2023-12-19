import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationProp, RouteProp } from '@react-navigation/native';

import CitiesGridScreen from './CitiesGridScreen';
import CityDetailsScreen from './CityDetailsScreen';
import { CityType } from '../utils/types';
import { colors } from '../utils';

type RootStackParamList = {
    Main: undefined,
    CityDetails: { city: CityType };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNaivgation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Main'
                screenOptions={{ headerTintColor: colors.black }}>
                <Stack.Screen
                    name="Main"
                    component={CitiesGridScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CityDetails"
                    component={CityDetailsScreen}
                    options={{ headerBackTitleVisible: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNaivgation;

export type CitiesGridScreenProps = {
    navigation: NavigationProp<RootStackParamList, 'Main'>;
}

export type CityDetailsScreenProps = {
    route: RouteProp<RootStackParamList, 'CityDetails'>;
    navigation: NavigationProp<RootStackParamList, 'CityDetails'>;
};