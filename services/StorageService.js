import AsyncStorage from "@react-native-async-storage/async-storage";
import DuplicatedEmail from "../err/DuplicatedEmail";

class StorageService {
    async saveData(key, value) {
        await AsyncStorage.setItem(key, value);
    }

    async getData(key) {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            throw new DuplicatedEmail("Email já cadastrado!");
        }
    }

    async findUserNameByEmail(email) {
        const name = await AsyncStorage.getItem(email);
        if (name === null) {
            throw new Error("Usuário não encontrado!");
        }

        return name;
    }
}

export default new StorageService();