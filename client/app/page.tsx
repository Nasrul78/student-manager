"use client"

import { getStudents } from "@/api/students"
import Pagination from "@/components/Pagination"
import StudentTable from "@/components/StudentTable"
import { IPaginatedStudents } from "@/types"
import { useEffect, useState } from "react"

const Home = () => {
  const [studentsData, setStudentsData] = useState<IPaginatedStudents>()
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  useEffect(() => {
    const load = async () => {
      const data = await getStudents(currentPage, perPage)

      setStudentsData(data)
    }

    load()
  }, [currentPage, perPage])

  return (
    <main className="container mx-auto p-12">
      <h1 className="text-6xl font-bold mb-6">Student Dashboard</h1>

      <StudentTable data={studentsData?.data} />

      <Pagination
        from={studentsData?.from}
        to={studentsData?.to}
        lastPage={studentsData?.last_page}
        total={studentsData?.total}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
    </main>
  )
}

export default Home
