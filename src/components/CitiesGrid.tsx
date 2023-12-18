import { useMemo, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import CityView from "./CityView";
import CitiesGridNoResult from "./CitiesGridNoResult";
import mockData from "../__mock__/data.json";
import { colors } from "../utils";
import { CityType } from "../utils/types";

type RenderItemType = {
    item: CityType;
    index: number;
}

const CitiesGrid = () => {
    const [searchInput, setSearchInput] = useState('');

    const actionCities = useMemo(() => {
        return mockData?.cities?.filter(city =>
            city.active &&
            (city.name.includes(searchInput) || city.country.includes(searchInput))
        );
    }, [searchInput]);

    const renderItem = ({ item: city }: RenderItemType) => (
        <CityView
            key={city.image}
            city={city}
        />
    );

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setSearchInput}
                placeholder="Search..."
                style={styles.searchInput}
            />

            <FlatList
                data={actionCities}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.image}
                numColumns={2}
                contentContainerStyle={styles.scrollViewContainer}
                columnWrapperStyle={{ gap: 28 }}
                ListEmptyComponent={CitiesGridNoResult}
            />
        </View>
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
    },
    searchInput: {
        marginVertical: 18,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        padding: 12,
    }
});