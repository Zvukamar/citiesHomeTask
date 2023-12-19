import { StyleSheet, Text, View } from "react-native";
import { CityType } from "../utils/types";

interface ExtraCityDetailsProps {
    city: CityType;
}

const ExtraCityDetails = ({ city }: ExtraCityDetailsProps) => {
    const { continent, coords } = city;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Continent</Text>
            <Text style={styles.contentText}>{continent}</Text>

            {/* Geolocation */}
            <View style={styles.geoContainer}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Latitude</Text>
                    <Text style={styles.contentText}>{coords.lat}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Longitude</Text>
                    <Text style={styles.contentText}>{coords.lng}</Text>
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
    geoContainer: {
        flexDirection: 'row',
        marginTop: 8,
        gap: 32
    }
});