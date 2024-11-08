import { BASE_URL } from "./baseurl";
import { commonApi } from "./commonApi";

export const registerApi = async (userDetails) => {
    try {
        const response = await commonApi("POST", `${BASE_URL}/auth/register`, userDetails, "");
        return response.data;
    } catch (error) {
        return { status: error.response?.status || 500, message: error.response?.data?.message || "Registration failed" };
    }
};

export const loginApi = async (credentials) => {
    try {
        const response = await commonApi("POST", `${BASE_URL}/auth/login`, credentials, "");
        return response.data;
    } catch (error) {
        return { status: error.response?.status || 500, message: error.response?.data?.message || "Login failed" };
    }
};
