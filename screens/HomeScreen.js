import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import homeScreenStyles from "../styles/screens/HomeScreenStyles";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import ApiService from "../services/ApiService";
import StorageService from "../services/StorageService";
import { FlatList } from "react-native-gesture-handler";
import EventCard from "../components/EventCard";
import { GREEN_3 } from "../styles/Colors";
import EventDialog from "../dialogs/EventDialog";
import SucessDialog from "../dialogs/SucessDialog";

export default function HomeScreen({ route }) {
    const email = route.params?.email;

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showDialog, setShowDialog] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [userName, setUserName] = useState('');

    const EventCardItem = ({ event }) => (
        <EventCard event={event} onPress={() => showDialogEvent(event)} />
    );

    const showDialogEvent = (event) => {
        setShowDialog(true)
        setSelectedEvent(event)
    }

    const saveEvent = async (event, email) => {
        try {
            const eventWithTimestamp = { ...event, confirmedAt: new Date().toISOString() };
            await StorageService.saveEvent(email, eventWithTimestamp);
            setShowDialog(false)
            setShowSuccess(true)
            fetchEvents()
        } catch (error) {
            console.error('Erro ao salvar evento:', error);
            Alert.alert('Alerta!', error.message || 'Não foi possível salvar o evento.');
        }
    }

    function fetchEvents() {
        setLoading(true);
        ApiService.getEvents()
            .then(async response => {
                const savedEvents = await StorageService.getEventsIdByEmail(email)
                setEvents(response.filter(event => !savedEvents.some(item => item === event.id)));
            })
            .catch(error => {
                console.error("Erro ao buscar eventos:", error);
            })
            .finally(() => {
                setLoading(false);
            }
            );
    }

    useEffect(() => {
        if (email) {
            fetchEvents();
        }
    }, [email]);

    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={homeScreenStyles.mainContainer}>
            <View style={homeScreenStyles.header}>
                <Text style={homeScreenStyles.title_header}>Seja bem-vindo</Text>
            </View>
            <View style={{ paddingBottom: insets.bottom }}>
                {showDialog && selectedEvent !== null ? (
                    <EventDialog event={selectedEvent}
                        showDialog={showDialog}
                        onClose={() => setShowDialog(false)}
                        onConfirm={() => saveEvent(selectedEvent, email)}
                    />
                ) : null}

                <SucessDialog
                    showDialog={showSuccess}
                    onClose={() => setShowSuccess(false)}
                    message={selectedEvent ? `Inscrição confirmada em ${selectedEvent.description}!` : 'Registro concluído com sucesso!'}
                />

                {loading ? (
                    <ActivityIndicator size="large" color={GREEN_3} />
                ) : events && events.length > 0 ? (
                    <FlatList
                        data={events}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => EventCardItem({ event: item })}
                    />
                ) : (
                    <Text >Nenhum evento disponível no momento.</Text>
                )
                }
            </View>
        </SafeAreaView>
    )
}