import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

export const getAll = () => axios.get(API_URL);
export const getById = (id) => axios.get(`${API_URL}/${id}`);
export const create = (student) => axios.post(API_URL, student);
export const update = (id, student) => axios.put(`${API_URL}/${id}`, student);
export const remove = (id) => axios.delete(`${API_URL}/${id}`);