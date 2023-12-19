import { StyleSheet, TextInput, View } from "react-native";
import SwitchButton from "./SwitchButton";
import SvgView from "./SvgView";
import { colors } from "../utils";

interface CitiesGridHeaderProps {
    onChangeText: (text: string) => void;
    toggleTemperatureUnit: () => void;
    onSort: () => void;
}

const CitiesGridHeader = ({ onChangeText, onSort, toggleTemperatureUnit }: CitiesGridHeaderProps) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <TextInput
                    onChangeText={onChangeText}
                    placeholder="Search..."
                    style={styles.searchInput}
                />

                <SvgView
                    name='sort'
                    size={24}
                    onPress={onSort}
                    style={styles.sortIcon}
                />
            </View>

            <SwitchButton
                lText="°C"
                rText="°F"
                onSwitch={toggleTemperatureUnit}
            />
        </View>
    )
}

export default CitiesGridHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 12,
        alignItems: 'center'
    },
    searchInput: {
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        padding: 12,
    },
    sortIcon: {
        position: 'absolute',
        justifyContent: 'center',
        right: 8,
        top: 0,
        bottom: 0
    }
});