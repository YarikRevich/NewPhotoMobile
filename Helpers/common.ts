import axios from "axios";
import { API_HOST } from "./../constants/credentials"

const i = axios.create({
    baseURL: API_HOST,
    headers: { "Fetch": "true" },
})

export default i
