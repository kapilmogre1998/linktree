import axios from 'axios'
import { API_URL } from '../../constant';

const getHeaders = () => ({
    'Authorization': `${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  });

export const updateUserNameAPI = async (data) => {
    try {
        return await axios.post(`${API_URL}/api/update-username`, data, { headers: getHeaders() })
    } catch (error) {
       throw error;
    }
}