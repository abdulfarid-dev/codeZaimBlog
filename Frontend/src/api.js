import axios from 'axios';

// Fallback to localhost if VITE_API_URL is not defined (helps during local dev or if env wasn't reloaded)
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000' });
console.log("Base URL:", API.defaults.baseURL);




API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");

    // 🟢 IMPORTANT: token null ho to kuch mat bhejo
    if (token && token !== "null" && token !== "undefined") {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});


export default API;