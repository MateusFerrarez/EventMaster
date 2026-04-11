import AsyncStorage from "@react-native-async-storage/async-storage";
import DuplicatedEmail from "../err/DuplicatedEmail";

class StorageService {
    async saveData(key, value) {
        await AsyncStorage.setItem(key, value);
    }

    async checkDuplicatedEmail(key) {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            throw new DuplicatedEmail("Email já cadastrado!");
        }
    }

    async saveObject(key, object) {
        const json = JSON.stringify(object);
        await AsyncStorage.setItem(key, json);
    }

    async getObject(key) {
        const json = await AsyncStorage.getItem(key);
        return json ? JSON.parse(json) : null;
    }

    async findUserNameNByEmail(email) {
        return await AsyncStorage.getItem(email);
    }

    async saveEvent(email, event) {
        const storageKey = `events:${email}`;
        const existingEvents = await this.getObject(storageKey) || [];
        existingEvents.push(event);
        await AsyncStorage.setItem(storageKey, JSON.stringify(existingEvents));
    }

    async getEventsByEmail(email) {
        const storageKey = `events:${email}`;
        return await this.getObject(storageKey) || [];
    }

    async getEventsIdByEmail(email) {
        const storageKey = `events:${email}`;
        const events = await this.getObject(storageKey)
        return events?.map(json => json.id) || [];
    }

    async getAllEventsByEmail(email) {
        const storageKey = `events:${email}`;
        const events = await this.getObject(storageKey)
        return events || [];
    }
}

export default new StorageService();