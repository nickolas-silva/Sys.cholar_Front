import { login } from "../types";
import { api } from ".";
import { setUserRole } from "../utils/role";
import { reloadAxios } from "./instance";


async function authentication({ username: usuario, password: senha }: login) {
    try {
        const response = await api.post('login', { usuario, senha });
        const token: string = response.data;
        localStorage.setItem('token', token);
        setUserRole(token);
        reloadAxios()
        return true;
    } catch (error) {
        return false;
    }
}

export default authentication;
