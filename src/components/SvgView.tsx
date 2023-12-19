import { PropsWithChildren, memo } from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import { colors, svgMap } from "../utils";
import { ColorType, SvgType } from "../utils/types";

interface SvgViewProps {
    name: SvgType;
    onPress?: () => void;
    size?: number;
    color?: ColorType;
    style?: StyleProp<ViewStyle>;
}

interface SvgWrapperProps {
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

const SvgWrapper = ({ onPress, style, children }: PropsWithChildren<SvgWrapperProps>) => {
    if (onPress) {
        return (
            <TouchableOpacity
                onPress={onPress}
                hitSlop={{ right: 10, left: 10, top: 10, bottom: 10 }}
                style={style}
                activeOpacity={0.7}>
                {children}
            </TouchableOpacity>
        );
    }
    return <View style={style}>{children}</View>;
}

const SvgView = ({ name, onPress, color = colors.black as ColorType, style, size = 30 }: SvgViewProps) => {
    const svgXml = svgMap[name];
    return (
        <SvgWrapper onPress={onPress} style={style}>
            <SvgXml xml={svgXml(color)} width={size} height={size} />
        </SvgWrapper>
    );
}

export default memo(SvgView);