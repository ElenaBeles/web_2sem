import axios from "axios";
axios.defaults.baseURL = 'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/'


axios.interceptors.request.use(({...config}) => {
    const token = window.localStorage.getItem("token");

    if (token) {
        return {
            ...config,
            headers: {
                ...(config.headers || {}),
                Auth: token,
                'Content-Type': 'application/json',
            }
        }
    } else {
        return config;
    }
})
export const configApi = () => {
}