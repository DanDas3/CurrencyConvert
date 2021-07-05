import axios from "axios";

export const key = "ee68a06ef30e6545f37c";

export const http = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
})