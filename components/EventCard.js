import { View, Text, TouchableOpacity } from "react-native";
import eventCardStyles from "../styles/screens/EventCardStyles";

export default function EventCard({ event, onPress }) {
    const formatedDate = new Date(event.eventDate);

    return (
        <View style={eventCardStyles.card}>
            <TouchableOpacity onPress={onPress}>
                <Text ellipsizeMode="tail" numberOfLines={2} style={{ marginBottom: 5 }}>
                    <Text style={eventCardStyles.description}>Descrição: </Text>
                    <Text style={eventCardStyles.description_text}>{event.description}</Text>
                </Text>

                <Text ellipsizeMode="tail" numberOfLines={1} style={{ marginBottom: 5 }}>
                    <Text style={eventCardStyles.description}>Local: </Text>
                    <Text style={eventCardStyles.description_text}>{event.eventLocal}</Text>
                </Text>

                <Text ellipsizeMode="tail" numberOfLines={1} style={{ marginBottom: 5 }}>
                    <Text style={eventCardStyles.description}>Data e horário: </Text>
                    <Text style={eventCardStyles.description_text}>{formatedDate.toLocaleString()}</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}