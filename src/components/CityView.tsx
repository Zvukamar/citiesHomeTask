import { Image, StyleSheet, Text } from "react-native";
import { CityType } from "../utils/types";
import { colors } from "../utils";

interface CityViewProps {
    city: CityType;
}

const CityView = ({ city }: CityViewProps) => {
    return (
        <>
            <Text style={styles.title}>
                {city.name} - {city.country}
            </Text>

            <Image
                src={city.image}
                style={styles.image}
                resizeMode='contain'
            />

            <Text style={styles.description}>
                {city.description}
            </Text>
        </>
    )
}

export default CityView;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 340,
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
    },
    description: {
        color: colors.black,
        fontSize: 16,
        marginTop: 8,
        marginBottom: 24
    }
})