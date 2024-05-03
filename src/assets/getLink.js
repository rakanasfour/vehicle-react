import axios from 'axios';
const baseUrl = 'http://3.134.76.112:8081';
const baseUrlService = 'http://18.222.239.15:8083';
const baseUrlFinance = 'http://52.14.86.227:8082';
export const getCar = async() => {
    try {
        const {data} = await axios.get(baseUrl + "/api/getAllVehicles");
        return data;
    } catch (error) {
        throw error;
    }
}

export const getService = async() => {
    try {
        const {data} = await axios.get(baseUrlService + "/api/getAllServices");
        return data;
    } catch (error) {
        throw error;
    }
}


export const getFinance = async() => {
    try {
        const {data} = await axios.get(baseUrlFinance + "/getAllFinances");
        return data;
    } catch (error) {
        throw error;
    }
}