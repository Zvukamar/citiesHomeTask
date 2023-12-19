import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CityType } from "../utils/types";
import { colors } from "../utils";

interface CityViewProps {
    city: CityType;
    onPress?: (city: CityType) => void;
    withTitle?: boolean;
}

const DEFAULT_IMAGE_URL = 'https://picsum.photos/id/0/500/500';

const CityView = ({ city, onPress, withTitle }: CityViewProps) => {
    const [image, setImage] = useState(city.image);
    const setDefaultImageOnError = () => setImage(DEFAULT_IMAGE_URL);

    const handlePress = () => {
        onPress?.(city);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            disabled={!onPress}
            onPress={handlePress}>

            {withTitle && (
                <Text style={styles.title}>
                    {city.name} - {city.country}
                </Text>
            )}

            <Image
                src={image}
                style={styles.image}
                onError={setDefaultImageOnError}
                resizeMode='contain'
            />

            <Text style={styles.description}>
                {city.description}
            </Text>
        </TouchableOpacity>
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