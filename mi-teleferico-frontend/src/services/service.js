import axios from 'axios';

export const getLineas = async () => {
    const response = await axios.get('http://localhost:1337/api/lineas');
    return response.data;
}