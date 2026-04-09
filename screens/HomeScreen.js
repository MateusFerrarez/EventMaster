
import { Button, StyleSheet, View, Text } from "react-native";


export default function HomeScreen({navigation}) {
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
    
    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    )
}