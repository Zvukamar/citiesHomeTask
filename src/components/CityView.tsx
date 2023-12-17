import { Image, StyleSheet, Text, View } from "react-native";
import { CityType } from "../utils/types";
import { colors } from "../utils";

interface CityViewProps {
    city: CityType;
}

const CityView = ({ city }: CityViewProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cityName}>
                {city.name}
            </Text>

            <Image
                src={city.image}
                style={styles.image}
            />
        </View>
    )
}

export default CityView;

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 160,
        marginBottom: 16
    },
    image: {
        width: "100%",
        height: "100%",
    },
    cityName: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    }
})