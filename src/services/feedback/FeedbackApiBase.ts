import axios from "axios";

export const FeedbackApiBase = axios.create({
    baseURL: 'https://feedback-bondecptm.herokuapp.com/'
})