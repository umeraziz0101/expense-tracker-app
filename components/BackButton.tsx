import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BackButtonProps } from "@/types";
import { useRouter } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import { verticalScale } from "@/utils/styling";
import { colors, radius } from "@/constants/theme";

const BackButton = ({ iconSize = 26, style }: BackButtonProps) => {
    const router = useRouter();
    return (
        <TouchableOpacity
            onPress={() => router.back()}
            style={[styles.button, style]}
        >
            <CaretLeft
                color={colors.white}
                size={verticalScale(iconSize)}
                weight="bold"
            />
        </TouchableOpacity>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.neutral600,
        alignSelf: "flex-start",
        borderRadius: radius._12,
        borderCurve: "continuous",
        padding: 5,
    },
});
