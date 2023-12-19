import { useMemo, useReducer, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CityView from "../components/CityView";
import CitiesGridHeader from "../components/CitiesGridHeader";
import CitiesGridNoResult from "../components/CitiesGridNoResult";
import mockData from "../__mock__/data.json";
import { CitiesGridScreenProps } from "../navigation";
import { CityType } from "../utils/types";
import { colors } from "../utils";

type RenderItemType = {
    item: CityType;
    index: number;
}

const CitiesGridScreen = ({ navigation }: CitiesGridScreenProps) => {
    const [searchInput, setSearchInput] = useState('');
    const [incSort, toggleSort] = useReducer(prev => prev * -1, 1);
    const [isInternationalUnit, toggleTemperatureUnit] = useReducer(prev => !prev, true);

    const activeCities = useMemo(() => {
        return mockData?.cities?.filter(({ name, country, active }) => (
            active &&
            (name.toLowerCase().includes(searchInput) || country.toLowerCase().includes(searchInput))
        )).sort((a, b) => a.name[0] > b.name[0] ? incSort : incSort * -1);
    }, [searchInput, incSort]);

    const renderItem = ({ item: city }: RenderItemType) => (
        <CityView
            key={city.image}
            city={city}
            onPress={navigateToDetails}
            withTitle
        />
    );

    const handleChangeText = (text: string) => {
        const trimmed = text.trim().toLowerCase();
        setSearchInput(trimmed);
    };

    const navigateToDetails = (city: CityType) => {
        navigation.navigate('CityDetails', { city, isInternationalUnit });
    };

    return (
        <View style={styles.container}>
            {/* Grid Header */}
            <CitiesGridHeader
                onChangeText={handleChangeText}
                toggleTemperatureUnit={toggleTemperatureUnit}
                onSort={toggleSort}
            />

            {/* Grid List */}
            <FlatList
                data={activeCities}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.image}
                scrollEnabled={activeCities.length > 0}
                contentContainerStyle={styles.scrollViewContainer}
                ListEmptyComponent={CitiesGridNoResult}
            />
        </View >
    );
}

export default CitiesGridScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        backgroundColor: colors.white
    },
    scrollViewContainer: {
        gap: 24,
        paddingBottom: 36,
    }
});