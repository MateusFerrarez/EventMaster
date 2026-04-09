import { TextInput, View, Text, Alert } from "react-native";

import textInputStyles from "../styles/TextInputStyles";
import PositiveButton from "../components/PositiveButton";
import { useState, useRef } from "react";
import { ValidateEmail } from "../utils/EmailHandler";
import InvalidEmail from "../err/InvalidEmail";
import InvalidName from "../err/InvalidName";
import NegativeButton from "../components/NegativeButton";
import screenStyles from "../styles/RegisterUserScreenStyles";

export default function RegisterUserScreen({ navigation }) {
    // Var states
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    // Textfield refs
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const registerAction = () => {
        try {
            if (name.length === 0) {
                throw new InvalidName("Nome inválido!");
            }

            ValidateEmail(email);
        } catch (error) {
            if (error instanceof InvalidEmail) {
                Alert.alert("Alerta!", error.message)
                emailRef.current.focus();
            }

            if (error instanceof InvalidName) {
                Alert.alert("Alerta!", error.message)
                nameRef.current.focus();
            }
        }
    };

    return (
        <View style={screenStyles.root}>
            <Text>Que bom que você está aqui!</Text>
            <Text>Preencha as seguintes informações e desfrute da melhor experiência!</Text>

            <TextInput
                ref={nameRef}
                style={textInputStyles.text_input}
                placeholder="Digite seu nome aqui..."
                onChangeText={(input) => setName(input)} />

            <TextInput
                ref={emailRef}
                style={textInputStyles.text_input}
                placeholder="Digite seu email aqui..."
                onChangeText={(input) => setEmail(input)}
            />

            <PositiveButton title="Registrar" onPress={registerAction} />
            <NegativeButton title="Voltar" onPress={() => navigation.goBack()} />

        </View>
    )
}