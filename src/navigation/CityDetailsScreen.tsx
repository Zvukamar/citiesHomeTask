import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import CityView from "../components/CityView";
import ExtraCityDetails from "../components/ExtraCityDetails";
import { CityDetailsScreenProps } from "../navigation";
import { colors } from "../utils";
import { fetchWeather } from "../api/weather";
import { WeatherType } from "../utils/types";
import { celsiusSymbol, fahrenheitSymbol } from "../utils/const";

const CityDetailsScreen = ({ route, navigation }: CityDetailsScreenProps) => {
    const { city, isInternationalUnit } = route.params || {};
    const { name, country } = city;
    const [weather, setWeather] = useState<WeatherType | null>(null);

    useEffect(() => {
        navigation.setOptions({
            title: `${name} - ${country}`
        });
    }, []);

    useEffect(() => {
        const getWeather = async () => {
            const unit = isInternationalUnit ? 'metric' : 'imperial';
            try {
                const res = await fetchWeather(name, unit);
                setWeather(res as WeatherType);
            } catch (err) { console.log({ err }) }
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
                    units={isInternationalUnit ? celsiusSymbol : fahrenheitSymbol}
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