import axios from "axios";


function getToken(): string {
    const token: string = localStorage.getItem("token");

    return token || '';
}


function getInstace() {
    return axios.create({
        baseURL: 'http://127.0.0.1:8080',
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
}

const api = getInstace();

export function reloadAxios() {
    api.defaults.headers["Authorization"] = getToken();
}


export default api;