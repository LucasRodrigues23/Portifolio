import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com/users/lucasrodrigues23/repos',
    timeout: 5000
})