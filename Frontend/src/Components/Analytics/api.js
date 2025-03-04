import axios from 'axios'
import { API_URL } from '../../constant';

const getHeaders = () => ({
    'Authorization': `${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  });

export const getCountAPI = async (id) => {
    try {
        return await axios.get(`${API_URL}/api/click-tracking/${id}`, { headers: getHeaders() })
    } catch (error) {
       throw error;
    }
}