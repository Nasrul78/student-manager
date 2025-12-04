import axios from "axios"

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("API Error: ", err.response?.data)
        return Promise.reject(err)
    }
)