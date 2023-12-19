import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import CityView from "../components/CityView";
import ExtraCityDetails from "../components/ExtraCityDetails";
import { CityDetailsScreenProps } from "../navigation";
import { colors } from "../utils";
import { fetchWeather } from "../api/weather";
import { WeatherType } from "../utils/types";

const CityDetailsScreen = ({ route, navigation }: CityDetailsScreenProps) => {
    const { city, isInternationalUnit } = route.params || {};
    const { name, country, coords } = city;
    const [weather, setWeather] = useState<WeatherType | null>(null);

    useEffect(() => {
        navigation.setOptions({
            title: `${name} - ${country}`
        });
    }, []);

    useEffect(() => {
        const getWeather = async () => {
            const unit = isInternationalUnit ? 'standard' : 'imperial';
            const res = await fetchWeather(coords.lng, coords.lat, unit);
            setWeather(res as WeatherType);
        }
        getWeather();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollviewContainer}>
                <CityView city={city} />
                <ExtraCityDetails
                    city={city}
                    weather={weather}
                />
            </ScrollView>
        </View >
    )
}

export default CityDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 14,
    },
    scrollviewContainer: {
        paddingBottom: 32
    }
})