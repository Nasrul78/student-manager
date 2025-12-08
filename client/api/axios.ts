import axios from "axios"

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response?.status === 422) {
            const errors = err.response.data.errors
            console.error("Validation errors:", errors)
        }

        return Promise.reject(err)
    }
)
