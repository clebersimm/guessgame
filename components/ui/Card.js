import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {

    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    );

}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginHorizontal: 24,
        marginTop: deviceWidth < 380 ? 28 : 36,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 6,
    },
});