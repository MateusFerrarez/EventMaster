import { Text, TouchableOpacity } from "react-native";

import buttonStyles from "../styles/ButtonStyles";

export default function NegativeButton({ title, onPress }) {
    return (
        <TouchableOpacity style={buttonStyles.negative_button} onPress={onPress}>
            <Text style={buttonStyles.negative_text}>{title}</Text>
        </TouchableOpacity>
    )
}