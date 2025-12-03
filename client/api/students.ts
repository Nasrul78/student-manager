import { api } from "./axios"

export const getStudents = async () => {
    const res = await api.get("/students")
    return res.data
}