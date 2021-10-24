import axios from "axios";

export const EventApiBase = axios.create({
    baseURL: 'https://eventocptm.herokuapp.com/'
})