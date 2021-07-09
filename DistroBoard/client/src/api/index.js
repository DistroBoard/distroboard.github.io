import axios from 'axios';

const url = 'http://localhost:5000/distros';

export const fetchDistros = () => axios.get(url);
export const createDistro = (newDistro) => axios.post(url, newDistro);
export const updateDistro = (id, updatedDistro) => axios.patch(`${url}/${id}`, updatedDistro);
