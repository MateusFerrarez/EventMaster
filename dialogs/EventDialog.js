import { Button, Modal, Text, View } from "react-native";

export default function EventDialog({ event, showDialog, onClose }) {
    return (
        <Modal
            visible={showDialog}
            onRequestClose={null}
            transparent={true}
            animationType="fade"
        >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <Text>{event ? event.description : "Detalhes do evento"}</Text>
                <Text>{event ? event.eventLocal : "Local do evento"}</Text>
                <Button title="Click here" onPress={onClose}>
                </Button>
            </View>

        </Modal>
    )
}