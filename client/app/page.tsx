"use client"

import { getStudents } from "@/api/students"
import StudentTable from "@/components/StudentTable"
import { IStudent } from "@/types"
import { useEffect, useState } from "react"

const Home = () => {
  const [students, setStudents] = useState<IStudent[]>([])

  useEffect(() => {
    const load = async () => {
      const data = await getStudents()
      setStudents(data)
    }

    load()
  }, [])

  return (
    <main className="container mx-auto p-12">
      <h1 className="text-6xl font-bold mb-6">Student Dashboard</h1>

      <StudentTable data={students} />
    </main>
  )
}

export default Home