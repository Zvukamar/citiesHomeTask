import { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CityView from "./CityView";
import CitiesGridHeader from "./CitiesGridHeader";
import CitiesGridNoResult from "./CitiesGridNoResult";
import mockData from "../__mock__/data.json";
import { CityType } from "../utils/types";

type RenderItemType = {
    item: CityType;
    index: number;
}

const CitiesGrid = () => {
    const [searchInput, setSearchInput] = useState('');

    const activeCities = useMemo(() => {
        return mockData?.cities?.filter(({ name, country, active }) => (
            active &&
            (name.toLowerCase().includes(searchInput) || country.toLowerCase().includes(searchInput))
        ));
    }, [searchInput]);

    const renderItem = ({ item: city }: RenderItemType) => (
        <CityView
            key={city.image}
            city={city}
        />
    );

    const handleChangeText = (text: string) => {
        const trimmed = text.trim().toLowerCase();
        setSearchInput(trimmed);
    };

    return (
        <View style={styles.container}>
            {/* Grid Header */}
            <CitiesGridHeader
                onChangeText={handleChangeText}
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

export default CitiesGrid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
    },
    scrollViewContainer: {
        gap: 24,
        paddingBottom: 36,
    }
});