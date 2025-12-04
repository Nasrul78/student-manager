import { IPaginatedStudents } from "@/types"
import { api } from "./axios"

export const getStudents = async (page = 1): Promise<IPaginatedStudents[]> => {
    const res = await api.get(`/students?page=${page}`)
    return res.data
}