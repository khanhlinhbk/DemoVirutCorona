import axios from 'axios';

const getDataApi = async() => {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    const api = `https://gw.vnexpress.net/cr/?name=world_coronavirus`;
    const result = await axios.get(proxy + api);
    const data = await result.status === 200 ? result.data : [];
    return data;
}



export const api = {
    getDataApi
}