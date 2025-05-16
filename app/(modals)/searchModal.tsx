import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { scale, verticalScale } from "@/utils/styling";
import { colors, spacingX, spacingY } from "@/constants/theme";
import ScreenWrapper from "@/components/ScreenWrapper";
import ModalWrapper from "@/components/ModalWrapper";
import Header from "@/components/Header";
import BackButton from "@/components/BackButton";
import * as Icons from "phosphor-react-native";
import { Image } from "expo-image";
import { getProfileImage } from "@/services/imageService";
import Typo from "@/components/Typo";
import Input from "@/components/Input";
import { TransactionType, UserDataType, WalletType } from "@/types";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/authContext";
import { updateUser } from "@/services/userService";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import ImageUpload from "@/components/ImageUpload";
import { createOrUpdateWallet, deleteWallet } from "@/services/walletService";
import { orderBy, where } from "firebase/firestore";
import useFetchData from "@/hooks/useFetchData";
import TransactionList from "@/components/TransactionList";

const SearchModal = () => {
    const { user, updateUserData } = useAuth();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [search, setSearch] = useState("");

    const constraints = [
        where("uid", "==", user?.uid),
        orderBy("date", "desc"),
    ];

    const {
        data: allTransactions,
        error,
        loading: transactionsLoading,
    } = useFetchData<TransactionType>("transactions", constraints);
    console.log("total transactions: ", allTransactions.length);

    const filteredTransactions = allTransactions.filter((item) => {
        if (search.length > 1) {
            if (
                item.category?.toLowerCase()?.includes(search?.toLowerCase()) ||
                item.type?.toLowerCase()?.includes(search?.toLowerCase()) ||
                item.description?.toLowerCase()?.includes(search?.toLowerCase())
            ) {
                return true;
            }
            return false;
        }
        return false;
    });
    return (
        <ModalWrapper style={{ backgroundColor: colors.neutral900 }}>
            <View style={styles.container}>
                <Header
                    title={"Search"}
                    leftIcon={<BackButton />}
                    style={{ marginBottom: spacingY._10 }}
                />

                {/* form */}
                <ScrollView contentContainerStyle={styles.form}>
                    <View style={styles.inputContainer}>
                        <Input
                            placeholder="shoes..."
                            value={search}
                            placeholderTextColor={colors.neutral400}
                            containerStyle={{
                                backgroundColor: colors.neutral800,
                            }}
                            onChangeText={(value) => setSearch(value)}
                        />
                    </View>
                    <View>
                        <TransactionList
                            loading={transactionsLoading}
                            data={filteredTransactions}
                            emptyListMessage="No transactions match your search keywords"
                        />
                    </View>
                </ScrollView>
            </View>
        </ModalWrapper>
    );
};

export default SearchModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: spacingY._20,
    },

    form: {
        gap: spacingY._30,
        marginTop: spacingY._15,
    },
    avatarContainer: {
        position: "relative",
        alignSelf: "center",
    },
    inputContainer: {
        gap: spacingY._10,
    },
});
