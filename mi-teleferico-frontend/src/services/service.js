import axios from 'axios';

export const getLineas = async () => {
    const response = await axios.get('http://localhost:1337/api/lineas');
    return response.data;
}

export const getFiles = async () => {
    const response = await axios.get('http://localhost:1337/api/upload/files');
    return response.data;
}

export const getEvents = async () => {
    const response = await axios.get('http://localhost:1337/api/eventos');
    return response.data;
}

