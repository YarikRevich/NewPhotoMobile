import axios from "axios";
import { API_HOST } from "./../constants/credentials"


export default axios.create({
    baseURL: API_HOST,
    headers: { "Fetch": "true" },
})
