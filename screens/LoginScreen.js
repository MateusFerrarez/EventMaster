import { TouchableOpacity, StyleSheet, View, Text, Alert } from "react-native";
import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';

import PositiveButton from "../components/PositiveButton";
import { TextInput } from "react-native-gesture-handler";
import textInputStyles from "../styles/TextInputStyles";
import NegativeButton from "../components/NegativeButton";
import StorageService from "../services/StorageService";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });

        return () => backHandler.remove();
    }, []);

    const loginAction = async () => {
        try {
            const userName = await StorageService.findUserNameByEmail(email);
            navigation.reset({
            index: 0,
            routes: [{ name: 'Home', params: { userName: userName } }],
        });
        } catch (error) {
            Alert.alert("Alerta!", "Erro: " + error.message);
        }
    }

    const styles = StyleSheet.create(
        {
            container: {
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
            },
        }
    )

    return (
        <View style={styles.container}>
            <Text>Bem vindo ao Event Master</Text>

            <TextInput 
                style={textInputStyles.text_input}
                placeholder="Digite seu email aqui..."
                value={email}
                onChangeText={(input) => setEmail(input)}
            />

            <Text>Ainda não se cadastrou?</Text>
            <PositiveButton title="Entrar" onPress={loginAction} />
            <NegativeButton title="Registrar" onPress={() => navigation.navigate('RegisterUser')} />
        </View>
    )
}