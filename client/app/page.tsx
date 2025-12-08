"use client"

import { createStudent, editStudent, getStudents } from "@/api/students"
import Pagination from "@/components/Pagination"
import StudentTable from "@/components/StudentTable"
import { IPaginatedStudents } from "@/types"
import { useCallback, useEffect, useState } from "react"
import StudentFormModal from "@/components/StudentFormModal"
import { toast } from "sonner"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const Home = () => {
    const [studentsData, setStudentsData] = useState<IPaginatedStudents>()
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const [loading, setLoading] = useState(true)
    const [createModalOpen, setCreateModalOpen] = useState<boolean>(false)
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false)

    const load = useCallback(async () => {
        setLoading(true)
        try {
            const response = await getStudents(currentPage, perPage)
            setStudentsData(response)
        } catch (error: unknown) {
            console.error("Failed to fetch students: ", error)
        } finally {
            setLoading(false)
        }
    }, [currentPage, perPage])

    useEffect(() => {
        load()
    }, [load])

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

    const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!e.currentTarget.checkValidity()) {
            e.currentTarget.reportValidity()
            return
        }

        if (!selectedId) return

        const formData = new FormData(e.currentTarget)

        try {
            const [] = await editStudent(formData, selectedId)
            load()
            setEditModalOpen(false)
            setSelectedId(null)
            toast.success("Student edited successfully")
        } catch (error: unknown) {
            console.error("Failed to edit student: ", error)
        }
    }

    return (
        <main className="container mx-auto px-6 py-6 overflow-hidden">
            <section className="flex items-center mb-4 justify-between ">
                <h1 className="text-3xl font-bold">Student Dashboard</h1>
                <Button
                    onClick={() => setCreateModalOpen(true)}
                    variant="outline"
                    disabled={loading}>
                    <Plus />
                    Create Student
                </Button>
            </section>

            <StudentTable
                data={studentsData?.data}
                setSelectedId={setSelectedId}
                setEditModalOpen={setEditModalOpen}
                loading={loading}
            />

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

            <StudentFormModal
                handleSubmit={handleCreate}
                open={createModalOpen}
                setOpen={setCreateModalOpen}
            />
            <StudentFormModal
                data={studentsData?.data.find((s) => s.id === selectedId)}
                handleSubmit={handleEdit}
                open={editModalOpen}
                setOpen={setEditModalOpen}
            />
        </main>
    )
}

export default Home
