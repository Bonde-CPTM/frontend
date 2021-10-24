import axios from "axios";

export const PointApiBase = axios.create({
    

    baseURL: 'https://pointcptm.herokuapp.com/'
})