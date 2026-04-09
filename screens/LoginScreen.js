import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import buttonStyles from "../styles/ButtonStyles";
import PositiveButton from "../components/PositiveButton";
import { TextInput } from "react-native-gesture-handler";

export default function LoginScreen({ navigation }) {
    const styles = StyleSheet.create(
        {
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }
    )

    return (
        <View style={styles.container}>
            <Text>Bem vindo ao Event Master</Text>

            <TextInput placeholder="Digite seu email aqui..."/>

            <Text>Ainda não se cadastrou?</Text>
            <PositiveButton title="Cadastrar" onPress={() => navigation.navigate('RegisterUser')} />
        </View>
    )
}