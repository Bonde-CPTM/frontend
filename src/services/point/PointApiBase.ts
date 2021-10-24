import axios from "axios";

export const PointApiBase = axios.create({
    baseURL: 'https://ponto-bondecptm.herokuapp.com/'
})