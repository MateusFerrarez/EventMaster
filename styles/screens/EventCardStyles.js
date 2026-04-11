import { StyleSheet } from "react-native";
import { GREEN_1, GREEN_2, GREEN_3 } from "../Colors";

const eventCardStyles = StyleSheet.create(
    {
        card: {
            marginHorizontal: 10,
            marginVertical: 5,
            padding: 5,
            borderWidth: 1,
            backgroundColor: GREEN_3,
            borderColor: GREEN_2,
            borderRadius: 10
        },
        description: {
            fontSize: 15,
            fontWeight: 500,
            color: GREEN_1
        },
        description_text: {
            fontSize: 14,
            fontWeight: "normal",
            color: GREEN_2
        }
    }
)

export default eventCardStyles;