import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';


const API_BASE_URL =
  process.env.VITE_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include cookies for session-based authentication
});

api.interceptors.request.use(
  (config:InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error:unknown) => Promise.reject(error),
);

export type User = {
  email: string;
  role: string;
  id: string;
};

export const authApi = {
  /**
   * Login with email and password
   * @param email User email
   * @param password User password
   * @returns Promise with the token response
   */
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login/', {
      email: email,
      password: password,
    });

    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    }

    return response.data;
  },

  /**
   * Register a new user
   * @param email User email
   * @param password User password
   * @param role User role (optional, defaults to 'USER')
   * @returns Promise with the user data and token response
   */
  register: async (email: string, password: string, role: string = 'USER') => {
    const response = await api.post('/auth/register/', {
      email,
      password,
      role,
    });

    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    }

    return response.data;
  },

  /**
   * Logout the current user
   * @returns Promise with the logout response
   */
  logout: async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    const response = await api.post('/auth/logout/', {
      refresh: refreshToken,
    });

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    return response.data;
  },

  /**
   * Get the current user profile
   * @returns Promise with the user data
   */
  getCurrentUser: async () => {
    const response = await api.get('/auth/me/');
    return response.data;
  },

  /**
   * Refresh the access token using the refresh token
   * @returns Promise with the new access token
   */
  refreshToken: async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await api.post('/auth/token/refresh/', {
      refresh: refreshToken,
    });

    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
    }

    return response.data;
  },

  /**
   * Forgot password
   * @param email User email
   * @returns Promise with the forgot password response
   */
  forgotPassword: async (email: string) => {
    const response = await api.post('/auth/forgot-password/', {
      email,
    });

    return response.data;
  },

  /**
   * Verify OTP
   * @param email User email
   * @param otp OTP
   * @returns Promise with the verify OTP response
   */
  verifyOTP: async (email: string, otp: string) => {
    const response = await api.post('/auth/verify-otp/', {
      email,
      otp,
    });

    return response.data;
  },

  /**
   * Reset password
   * @param password New password
   * @returns Promise with the reset password response
   */
  resetPassword: async (password: string) => {
    const response = await api.post('/auth/reset-password/', {
      password,
    });

    return response.data;
  },
};
