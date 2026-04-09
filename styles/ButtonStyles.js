import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create(
    {
        positive_button : {
            backgroundColor: '#408A71',
            borderRadius: 5,
            padding: 10,
        },
        positive_text : {
            color: '#fff',
            fontWeight: 'bold',
        },
        negative_button : {
            backgroundColor: '#285A48',
            borderRadius: 5,
            padding: 10,
        }
    }
)

export default buttonStyles;