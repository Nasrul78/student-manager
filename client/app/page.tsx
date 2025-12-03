import StudentTable from "@/components/StudentTable"

const Home = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "6o9Jt@example.com",
      phone: "123-456-7890",
      dob: "1990-01-01",
      gender: "Male",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "oB2iI@example.com",
      phone: "987-654-3210",
      dob: "1995-05-05",
      gender: "Female",
      address: "456 Elm St, Anytown, USA",
  }]

  return (
    <main className="container mx-auto p-12">
      <h1 className="text-6xl font-bold mb-6">Student Dashboard</h1>

      <StudentTable data={data} />
    </main>
  )
}

export default Home