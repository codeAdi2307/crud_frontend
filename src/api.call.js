import axios from 'axios';

// const API_URL = 'http://localhost:8000/api';
const API_URL = 'https://crud-task-m6dq.onrender.com/api';

export const signUp = async (data) => {
  try {
    console.log("adsas");
    console.log(data);
    const response = await axios.post(`${API_URL}/signup`,data);
    if (response) {
      let signup_data = response.data;
      return signup_data;
    } else {
      console.log("Unable to fetch signup response");
      return [];
    }
  } catch (error) {
    console.error("Error fetching response:", error);
    return [];
  }
};

export const signIn = async (data) => {
  try {
    console.log("adsas");
    console.log(data);
  
    const response = await axios.post(`${API_URL}/signin`,data);
    console.log(response);
    if (response) {
      let signup_data = await response.data;
      return signup_data;
    } else {
      console.log("Unable to fetch signup response");
      return [];
    }
  } catch (error) {
    console.error("Error fetching response:", error);
    return [];
  }
};
;

export const getAllTasks = async (token) => {
  try {
    console.log("tokenssss",token);
    
    const response = await axios.get(`${API_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
    throw error;
  }
};

export const createTask = async (taskData, token) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error.message);
    throw error;
  }
};

export const updateTask = async (taskId, taskData, token) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${taskId}`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error.message);
    throw error;
  }
};

export const deleteTask = async (taskId, token) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;

  } catch (error) {
    console.error('Error deleting task:', error.message);
    throw error;
  }
};
