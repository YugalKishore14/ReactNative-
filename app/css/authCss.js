// AuthScreenStyles.js
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerr: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "black"
    },
    innerView: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        elevation: Platform.OS === "android" ? 4 : 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 15,
    },
});

export default styles;
