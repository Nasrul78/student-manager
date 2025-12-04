"use client"

import { getStudents } from "@/api/students"
import Pagination from "@/components/Pagination"
import StudentTable from "@/components/StudentTable"
import { IPaginatedStudents } from "@/types"
import { useEffect, useState } from "react"
import { Spinner } from "@/components/ui/spinner"

const Home = () => {
  const [studentsData, setStudentsData] = useState<IPaginatedStudents>()
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const data = await getStudents(currentPage, perPage)
        setStudentsData(data)
      } catch (error) {
        console.error("Failed to fetch students:", error)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [currentPage, perPage])

  return (
    <main className="container mx-auto p-12">
      <h1 className="text-6xl font-bold mb-6">Student Dashboard</h1>

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
