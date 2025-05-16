import {
    Dimensions,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React from "react";
import { ScreenWrapperProps } from "@/types";
import { colors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");
const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
    let paddingTop = Platform.OS == "ios" ? height * 0.06 : 50;
    return (
        <View
            style={[
                { flex: 1, paddingTop, backgroundColor: colors.neutral900 },
                style,
            ]}
        >
            <StatusBar
                barStyle={"light-content"}
                translucent={true}
                backgroundColor={"transparent"}
                // backgroundColor={colors.neutral900}
            />
            {children}
        </View>
    );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
