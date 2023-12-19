import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import CityView from "../components/CityView";
import ExtraCityDetails from "../components/ExtraCityDetails";
import { CityDetailsScreenProps } from "../navigation";
import { colors } from "../utils";

const CityDetailsScreen = ({ route, navigation }: CityDetailsScreenProps) => {
    const { city } = route.params || {};
    const { name, country } = city;

    useEffect(() => {
        navigation.setOptions({
            title: `${name} - ${country}`
        });
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollviewContainer}>
                <CityView city={city} />
                <ExtraCityDetails city={city} />
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