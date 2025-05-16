import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ModalWrapperProps } from "@/types";
import { colors, spacingY } from "@/constants/theme";

const isIos = Platform.OS == "ios";
const ModalWrapper = ({
    style,
    children,
    bg = colors.neutral800,
}: ModalWrapperProps) => {
    return (
        <View
            style={[styles.container, { backgroundColor: bg }, style && style]}
        >
            {children}
        </View>
    );
};

export default ModalWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: isIos ? spacingY._15 : 50,
        paddingBottom: isIos ? spacingY._20 : spacingY._10,
    },
});
