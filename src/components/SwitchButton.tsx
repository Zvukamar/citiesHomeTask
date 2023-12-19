import { useReducer } from "react";
import { StyleProp, StyleSheet, Switch, Text, View, ViewStyle } from "react-native";
import { colors } from "../utils";

interface SwitchButtonProps {
    onSwitch: () => void;
    lText?: string;
    rText?: string;
    style?: StyleProp<ViewStyle>;
}

const SwitchButton = ({ onSwitch, lText, rText, style }: SwitchButtonProps) => {
    const [isEnabled, toggleIsEnabled] = useReducer(previousState => !previousState, false);

    const handleToggle = () => {
        toggleIsEnabled();
        onSwitch();
    }

    return (
        <View style={[styles.container, style]}>
            {lText && <Text>{lText}</Text>}

            <Switch
                trackColor={{ false: colors.green, true: colors.blue }}
                thumbColor={colors.white}
                ios_backgroundColor={colors.green}
                onValueChange={handleToggle}
                value={isEnabled}
            />

            {rText && <Text>{rText}</Text>}
        </View>

    )
}

export default SwitchButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        transform: [{ scale: 0.75 }],
        gap: 4
    }
})