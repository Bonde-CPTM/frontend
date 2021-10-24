import axios from "axios";

export const FeedbackApiBase = axios.create({
    baseURL: 'https://feedbackcptm.herokuapp.com/'
})