import axios from "axios";

export const EventApiBase = axios.create({
    baseURL: 'https://evento-bondecptm.herokuapp.com/'
})