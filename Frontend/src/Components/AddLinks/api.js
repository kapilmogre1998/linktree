import axios from 'axios'
import { API_URL } from '../../constant';

const getHeaders = () => ({
    'Authorization': `${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  });

export const createLinkTreeAPI = async (data) => {
    try {
        return await axios.post(`${API_URL}/api/mobilepreview/create`, data, { headers: getHeaders() })
    } catch (error) {
       throw error;
    }
}

export const updateLinkTreeAPI = async (data, id) => {
    try {
        return await axios.put(`${API_URL}/api/mobilepreview/update/${id}`, data, { headers: getHeaders() })
    } catch (error) {
       throw error;
    }
}

export const getLinkTreeAPI = async (id) => {
    try {
        return await axios.get(`${API_URL}/api/mobilepreview/get?userId=${id}`, { headers: getHeaders() })
    } catch (error) {
       throw error;
    }
}