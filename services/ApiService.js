
class ApiService {
    async getEvents() {
        const axios = require('axios');
        const API_URL = 'https://69d54d3fd396bd74235ea9f2.mockapi.io/api/events';
        const response = await axios.get(API_URL);
        return response.data; 

    }
}

export default new ApiService();