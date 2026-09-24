import axios from "axios";

const API_URL = "http://54.167.248.215:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// Create Student
export const createStudent = async (studentData) => {
  try {
    const response = await api.post("/students", studentData);

    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to create student";
  }
};


// Get All Students
export const getStudents = async () => {
  try {
    const response = await api.get("/students");

    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to fetch students";
  }
};


export default api;