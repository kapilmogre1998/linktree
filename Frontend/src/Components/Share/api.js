import axios from 'axios'
import { API_URL } from '../../constant';

const getHeaders = () => ({
    'Authorization': `${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  });


export const clickTrackingAPI = async (data) => {
    try {
        return await axios.post(`${API_URL}/api/click-tracking`, data, getHeaders())
    } catch (error) {
       throw error;
    }
}

export const getProfileAPI = async (id) => {
    try {
        return await axios.get(`${API_URL}/api/share-profle?userId=${id}`, { headers: getHeaders() })
    } catch (error) {
       throw error;
    }
}