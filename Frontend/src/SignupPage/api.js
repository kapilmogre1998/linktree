import axios from 'axios'
import { API_URL } from '../constant';

export const signupAPI = async (data) => {
    try {
        return await axios.post(`${API_URL}/api/signup`, data)
    } catch (error) {
       throw error;
    }
}