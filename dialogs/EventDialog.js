import { Button, Modal, StyleSheet, Text, View } from "react-native";
import PositiveButton from "../components/PositiveButton";
import NegativeButton from "../components/NegativeButton";

export default function EventDialog({ event, showDialog, onClose, onConfirm }) {
    const backgroundStyle = StyleSheet.create(
        {
            container: {
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 20,
                width: 250
            }
        }
    )
    return (
        <Modal
            visible={showDialog}
            onRequestClose={null}
            transparent={true}
            animationType="fade"
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={backgroundStyle.container}>
                    <Text style={{ textAlign: 'center', marginVertical: 15, fontWeight: 500 }}>Deseja confirmar presença no evento?</Text>
                    <Text style={{ marginBottom: 15 }}>
                        <Text style={{ fontWeight: 500 }}>Descrição: </Text>
                        <Text>{event.description}</Text>
                    </Text>

                    <PositiveButton title="Sim" onPress={onConfirm} />
                    <NegativeButton title="Não" onPress={onClose} />
                </View>
            </View>

        </Modal>
    )
}