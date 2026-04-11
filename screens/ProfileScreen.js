import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Text, Modal, View, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EventCard from "../components/EventCard";
import StorageService from "../services/StorageService";
import { GREEN_3 } from "../styles/Colors";
import QRCode from 'react-native-qrcode-svg';

const buildQRPayload = ({ event, email, userName }) => {
    const confirmedAt = new Date();

    return JSON.stringify({
        nomeParticipante: userName,
        email,
        nomeEvento: event.description,
        dataConfirmacao: confirmedAt.toLocaleDateString('pt-BR'),
        horarioConfirmacao: confirmedAt.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }),
    });
};

export default function ProfileScreen({ route }) {
    const email = route.params?.email;

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showQRModal, setShowQRModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [qrPayload, setQrPayload] = useState(null); 
    const [userName, setUserName] = useState('');

    const showQRModalForEvent = useCallback((event) => {
        setSelectedEvent(event);
        setQrPayload(buildQRPayload({ event, email, userName }));
        setShowQRModal(true);
    }, [email, userName]);

    const closeQRModal = useCallback(() => {
        setShowQRModal(false);
        setSelectedEvent(null);
        setQrPayload(null);
    }, []);

    const fetchUserName = useCallback(async () => {
        try {
            const name = await StorageService.findUserNameNByEmail(email);
            setUserName(name || email);
        } catch (error) {
            console.error("Erro ao buscar nome do usuário:", error);
            setUserName(email);
        }
    }, [email]);

    const fetchEvents = useCallback(async () => {
        setLoading(true);
        try {
            const savedEvents = await StorageService.getAllEventsByEmail(email);
            setEvents(savedEvents);
        } catch (error) {
            console.error("Erro ao buscar eventos:", error);
            setEvents([]);
        } finally {
            setLoading(false);
        }
    }, [email]);

    useEffect(() => {
        if (!email) return;
        fetchUserName();
        fetchEvents();
    }, [email, fetchUserName, fetchEvents]);

    useFocusEffect(
        useCallback(() => {
            if (email) fetchEvents();
        }, [email, fetchEvents])
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Perfil de {userName}</Text>
            <Text style={styles.heading}>Eventos confirmados:</Text>

            {loading ? (
                <ActivityIndicator size="large" color={GREEN_3} />
            ) : events?.length > 0 ? (
                <FlatList
                    data={events}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        EventCard({ event: item, onPress: () => showQRModalForEvent(item) })
                    }
                />
            ) : (
                <Text>Nenhum evento disponível no momento.</Text>
            )}

            <Modal
                visible={showQRModal}
                transparent
                animationType="fade"
                onRequestClose={closeQRModal}
            >
                <View style={styles.overlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>QR Code do Evento</Text>

                        {qrPayload && (
                            <QRCode
                                value={qrPayload}
                                size={200}
                                color="black"
                                backgroundColor="white"
                            />
                        )}

                        <Pressable style={styles.closeButton} onPress={closeQRModal}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 24,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#34A853',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});