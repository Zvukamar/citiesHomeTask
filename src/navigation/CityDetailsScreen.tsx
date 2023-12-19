import { StyleSheet, Text, View } from "react-native";

import { CityDetailsScreenProps } from "../navigation";
import { colors } from "../utils";

const CityDetailsScreen = ({ route }: CityDetailsScreenProps) => {
    const { city } = route.params || {};

    return (
        <View style={styles.container}>
            <Text>Details</Text>
        </View>
    )
}

export default CityDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})