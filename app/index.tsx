import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const index = () => {
    const router = useRouter();
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push("/welcome");
    //     }, 2000);
    // }, []);
    return (
        <ScreenWrapper style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={require("../assets/images/splashImage.png")}
            />
        </ScreenWrapper>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: colors.neutral900,
    },
    logo: {
        height: "20%",
        aspectRatio: 1,
    },
});
