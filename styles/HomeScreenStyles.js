import { StyleSheet } from "react-native";
import { DARK_GREEN } from "./Colors";


const homeScreenStyles = StyleSheet.create(
    {
        header : {
            fontWeight: 'bold',
            justifyContent: 'flex-start',
            alignContent: 'center',
            backgroundColor: DARK_GREEN
        },
        title_header : {
            textAlign: 'center', 
            fontWeight: 200, 
            paddingVertical: 15, 
            fontSize: 20,
            color : 'white'
        },
        mainContainer: {
            flex: 1,
            flexDirection: 'column'
        },
    }
)

export default homeScreenStyles;