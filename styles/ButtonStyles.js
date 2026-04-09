import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create(
    {
        positive_button: {
            backgroundColor: '#408A71',
            borderRadius: 5,
            padding: 10,
            margin: 10,
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
            margin: 10,
        },
        negative_text: {
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    }
)

export default buttonStyles;