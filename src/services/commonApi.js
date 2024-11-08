// src/services/commonApi.js

import axios from 'axios';

// Common API function to make HTTP requests
export const commonApi = async (method, url, data, token) => {
    try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios({
            method,
            url,
            data,
            headers,
        });
        return response;
    } catch (error) {
        console.error('API request error:', error);
        throw error;  // Re-throw the error to be handled in the calling function
    }
};
