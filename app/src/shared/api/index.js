

import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL;

// Создаем экземпляр Axios с базовым URL-адресом из переменной окружения
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// Функция для выполнения входа в учетку
export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/login', userData);
    return response;
  } catch (error) {
    throw new Error('Ошибка при выполнении запроса: ' + error.message);
  }
};
// Функция для регистрации в системе
export const RegisterUser = async (userData) => {
    try {
      const response = await axiosInstance.post('/api/register', userData);
      return response;
    } catch (error) {
      throw new Error('Ошибка при выполнении запроса: ' + error.message);
    }
  };