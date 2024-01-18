import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72, 
        borderRadius: 24,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72, 
        borderRadius: 24,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72, 
        borderRadius: 24,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72, 
        borderRadius: 24,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: "#fff",
    },
    smallTextDark: {
        fontSize: 32,
        color: "#1111",
    },
    row: {
        maxWidth: "100%",
        flexDirection: "row",
    },
    viewButton: {
        position: "absolute",
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: "gray",
        fontWeight: "200",
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: "gray",
        fontWeight: "200",
        alignSelf: "flex-end",
    },
});