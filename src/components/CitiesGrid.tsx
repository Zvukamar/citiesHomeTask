import { useMemo } from "react";
import { ScrollView, StyleSheet } from "react-native";
import CityView from "./CityView";
import mockData from "../__mock__/data.json";

const CitiesGrid = () => {
    const actionCities = useMemo(() => {
        return mockData?.cities?.filter(city => city.active);
    }, [mockData?.cities]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>
            {actionCities.map(city => (
                <CityView
                    key={city.image}
                    city={city}
                />
            ))}
        </ScrollView>
    );
}

export default CitiesGrid;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        gap: 24,
        paddingVertical: 24,
    }
});