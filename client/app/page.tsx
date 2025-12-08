"use client"

import { createStudent, getStudents } from "@/api/students"
import Pagination from "@/components/Pagination"
import StudentTable from "@/components/StudentTable"
import { IPaginatedStudents } from "@/types"
import { useEffect, useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import StudentFormModal from "@/components/StudentFormModal"
import { toast } from "sonner"

const Home = () => {
    const [studentsData, setStudentsData] = useState<IPaginatedStudents>()
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const [loading, setLoading] = useState(true)
    const [CreateModalOpen, setCreateModalOpen] = useState<boolean>(false)

    const load = async () => {
        setLoading(true)
        try {
            const response = await getStudents(currentPage, perPage)
            setStudentsData(response)
        } catch (error: unknown) {
            console.error("Failed to fetch students: ", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        load()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, perPage])

    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!e.currentTarget.checkValidity()) {
            e.currentTarget.reportValidity()
            return
        }

        const formData = new FormData(e.currentTarget)

        try {
            await createStudent(formData)
            load()
            setCreateModalOpen(false)
            toast.success("Student created successfully")
        } catch (error: unknown) {
            console.error("Failed to create student: ", error)
        }
    }

    return (
        <main className="container mx-auto px-6 py-6 overflow-hidden">
            <section className="flex items-center mb-4 justify-between ">
                <h1 className="text-3xl font-bold">Student Dashboard</h1>
                <StudentFormModal
                    handleSubmit={handleCreate}
                    open={CreateModalOpen}
                    setOpen={setCreateModalOpen}
                    disabled={loading}
                />
            </section>

            {loading ? (
                <div className="text-center flex gap-2 justify-center items-center h-24 text-xl font-medium">
                    <Spinner className="size-6" />
                    Loading students...
                </div>
            ) : (
                <StudentTable data={studentsData?.data} />
            )}

            <Pagination
                from={studentsData?.from}
                to={studentsData?.to}
                lastPage={studentsData?.last_page}
                total={studentsData?.total}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                perPage={perPage}
                setPerPage={setPerPage}
                disabled={loading}
            />
        </main>
    )
}

export default Home
