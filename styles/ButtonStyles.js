import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create(
    {
        positive_button: {
            backgroundColor: '#408A71',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
            width: 240
        },
        positive_text: {
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        negative_button: {
            backgroundColor: '#285A48',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
            width: 240,
        },
        negative_text: {
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    }
)

export default buttonStyles;