import axios from "axios";

export const loginApiBase = axios.create({
    baseURL: 'https://logincptm.herokuapp.com/'
})