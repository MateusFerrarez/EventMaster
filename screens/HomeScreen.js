
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import homeScreenStyles from "../styles/HomeScreenStyles";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import ApiService from "../services/ApiService";
import { FlatList } from "react-native-gesture-handler";
import EventCard from "../components/EventCard";
import { GREEN_3 } from "../styles/Colors";


export default function HomeScreen({ navigation, route }) {
    const userName = route.params?.userName;
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);

    const EventCardItem = ({ event }) => (
        <EventCard event={event} />
    );

    const eventList = [
        { id: "1", description: "Evento 1", eventLocal: "Local 1" },
        { id: "2", description: "Evento 2", eventLocal: "Local 2" },
        { id: "3", description: "Evento 3", eventLocal: "Local 3" },
    ];

    function fetchEvents() {
        setLoading(true);
        ApiService.getEvents()
            .then(response => {
                setEvents(response.filter(event => !eventList.some(item => item.id === event.id)));
            })
            .catch(error => {
                console.error("Erro ao buscar eventos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={homeScreenStyles.mainContainer}>
            <View style={homeScreenStyles.header}>
                <Text style={homeScreenStyles.title_header}>Seja bem-vindo {userName}</Text>
            </View>

            <View style={{ paddingBottom: insets.bottom }}>
                {loading ? (
                    <ActivityIndicator size="large" color={GREEN_3} />
                ) : events && events.length > 0 ? (
                    <FlatList
                        data={events}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => EventCardItem({ event: item })}
                    />
                ) : (
                    <Text>Nenhum evento retornado!</Text>
                )
                }
            </View>
        </SafeAreaView>
    )
}