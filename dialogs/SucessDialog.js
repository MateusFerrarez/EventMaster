import { Modal, StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SucessDialog({ showDialog, onClose, message = 'Operação realizada com sucesso!' }) {
    return (
        <Modal
            visible={showDialog}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <MaterialIcons name="check-circle" size={72} color="#34A853" />
                    <Text style={styles.title}>Sucesso!</Text>
                    <Text style={styles.message}>{message}</Text>
                    <Pressable style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Fechar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
    },
    container: {
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
        fontSize: 22,
        fontWeight: '700',
        marginTop: 16,
        marginBottom: 8,
        color: '#1A1A1A',
    },
    message: {
        fontSize: 16,
        color: '#4D4D4D',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#34A853',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 26,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
