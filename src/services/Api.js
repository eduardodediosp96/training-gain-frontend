import axios from 'axios';
export const HTTP = axios.create({
    // baseURL: 'https://localhost:44368/api',
    baseURL: 'https://traininggainapi20201124030845.azurewebsites.net/api',
    // baseURL: 'https://traininggainapidevelop20201124002700.azurewebsites.net/api/',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS, POST'
    }
})

// https://traininggainapidevelop20201124002700.azurewebsites.net/api/sessions