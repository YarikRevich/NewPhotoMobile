import axios from "axios";
import { API_HOST } from "./../constants/credentials"
import { getTokens, setTokens } from "./storage";


let worked = false
const formatCookie = (v: Array<string>): Array<string> => {
    if (!v) return v
    let r: string[] = [];
    const c = v[0];
    for (let i of c.split(",")) {
        r.push(i.split(";")[0].replaceAll(" ", ""))
    }
    return [r.join("; ")]
}

const i = axios.create({
    baseURL: API_HOST,
    headers: { "Fetch": "true", "S-Type": "mobile" },
    responseType: "json",
    withCredentials: true,
})

i.interceptors.request.use(async config => {
    const t = await getTokens()
    if (t) {
        config.headers["X-AT"] = t.at
        config.headers["X-LT"] = t.lt
    }
    return config
})

i.interceptors.response.use(async v => {
    const at = v.headers["x-at"]
    const lt = v.headers["x-lt"]
    if (at && lt) {
        await setTokens(at, lt)
    }
    return v
})

export default i
