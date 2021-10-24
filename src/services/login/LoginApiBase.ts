import axios from "axios";

export const loginApiBase = axios.create({
    baseURL: 'https://login-bondecptm.herokuapp.com/'
})