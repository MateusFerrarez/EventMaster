import { TouchableOpacity, StyleSheet, View, Text, Alert } from "react-native";
import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import PositiveButton from "../components/PositiveButton";
import { TextInput } from "react-native-gesture-handler";
import textInputStyles from "../styles/TextInputStyles";
import NegativeButton from "../components/NegativeButton";
import StorageService from "../services/StorageService";
import screenStyles from "../styles/screens/RegisterUserScreenStyles";

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
            navigation.reset({
            index: 0,
            routes: [{ name: 'HomeBar', params: { email: email } }],
        });
        } catch (error) {
            Alert.alert("Alerta!", "Erro: " + error.message);
        }
    }

    return (
        <SafeAreaView style={screenStyles.root}>
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
        </SafeAreaView>
    )
}