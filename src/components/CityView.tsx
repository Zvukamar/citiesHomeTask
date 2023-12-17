import { Image, StyleSheet, Text, View } from "react-native";
import { CityType } from "../utils/types";
import { colors } from "../utils";

interface CityViewProps {
    city: CityType;
}

const CityView = ({ city }: CityViewProps) => {
    return (
        <View>
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
    image: {
        width: 160,
        height: 160,
    },
    cityName: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    }
})