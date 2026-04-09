import { Text, TouchableOpacity } from "react-native";

import buttonStyles from "../styles/ButtonStyles";

export default function PositiveButton({ title, onPress }) {
    return (
        <TouchableOpacity style={buttonStyles.positive_button} onPress={onPress}>
            <Text style={buttonStyles.positive_text}>{title}</Text>
        </TouchableOpacity>
    )
}