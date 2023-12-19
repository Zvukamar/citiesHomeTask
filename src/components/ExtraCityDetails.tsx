import { StyleSheet, Text, View } from "react-native";
import { CityType, WeatherType } from "../utils/types";

interface ExtraCityDetailsProps {
    city: CityType;
    weather: WeatherType | null;
    units: string;
}

const ExtraCityDetails = ({ city, weather, units }: ExtraCityDetailsProps) => {
    const { continent, coords } = city;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Continent</Text>
            <Text style={styles.contentText}>{continent}</Text>

            {/* Geolocation */}
            <View style={styles.wrapperContainer}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Latitude</Text>
                    <Text style={styles.contentText}>{coords.lat}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Longitude</Text>
                    <Text style={styles.contentText}>{coords.lng}</Text>
                </View>
            </View>

            {/* Weather */}
            <View style={styles.wrapperContainer}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Temperature</Text>
                    <Text style={styles.contentText}>{weather?.main?.temp}{units}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Feels Like</Text>
                    <Text style={styles.contentText}>{weather?.main?.feels_like}{units}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.titleText}>Humidity</Text>
                    <Text style={styles.contentText}>{weather?.main?.humidity}%</Text>
                </View>
            </View>

            <View style={styles.wrapperContainer}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Wind</Text>
                    <Text style={styles.contentText}>{weather?.wind?.speed} km/h</Text>
                </View>
            </View>
        </View>
    );
}

export default ExtraCityDetails;

const styles = StyleSheet.create({
    container: {
        gap: 8
    },
    titleText: {
        fontWeight: '600',
        fontSize: 18
    },
    contentText: {
        fontWeight: '500',
        fontSize: 16
    },
    wrapperContainer: {
        flexDirection: 'row',
        marginTop: 8,
        gap: 32
    },
});