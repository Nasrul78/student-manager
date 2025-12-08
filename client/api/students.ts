import { IPaginatedStudents } from "@/types"
import { api } from "./axios"

export const getStudents = async (
    page = 1,
    perPage = 10
): Promise<IPaginatedStudents> => {
    const res = await api.get(`/students?per_page=${perPage}&page=${page}`)
    return res.data
}

export const createStudent = async (data: FormData) => {
    const res = await api.post("/students", data)
    return res.data
}
