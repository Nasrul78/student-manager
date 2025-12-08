import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { IStudent } from "@/types"
import EditDeleteDropdown from "@/components/EditDeleteDropdown"
import SkeletonTable from "./SkeletonTable"

interface StudentTableProps {
    data: IStudent[] | undefined
    setSelectedId: React.Dispatch<React.SetStateAction<number | null>>
    setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    loading: boolean
}

const StudentTable = ({
    data,
    setSelectedId,
    setEditModalOpen,
    loading,
}: StudentTableProps) => {
    const columns = [
        { label: "ID", className: "text-right max-w-8" },
        { label: "Name", className: "max-w-[150px]" },
        { label: "Email", className: "max-w-[200px]" },
        { label: "Phone", className: "max-w-[120px]" },
        { label: "Date of Birth", className: "max-w-[120px]" },
        { label: "Gender", className: "max-w-20" },
        { label: "Address", className: "max-w-[200px]" },
        { label: "", className: "w-12" },
    ]

    return (
        <article className="overflow-hidden rounded-2xl border min-w-[800px]">
            <Table className="table-auto">
                <TableHeader className="bg-muted sticky top-0 z-10">
                    <TableRow>
                        {columns.map((column) => (
                            <TableHead
                                key={column.label}
                                className={
                                    column.className + " whitespace-nowrap"
                                }>
                                {column.label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading && <SkeletonTable />}

                    {!loading &&
                        data &&
                        data.length > 0 &&
                        data.map((student) => {
                            const fields = [
                                student.id,
                                student.name,
                                student.email,
                                student.phone,
                                student.dob,
                                student.gender,
                                student.address,
                            ]

                            return (
                                <TableRow key={student.id}>
                                    {fields.map((value, i) => (
                                        <TableCell
                                            key={i}
                                            className={`truncate max-w-[200px] ${
                                                i === 0 ? "text-right" : ""
                                            } ${i === 5 ? "capitalize" : ""}`}>
                                            {value}
                                        </TableCell>
                                    ))}

                                    <TableCell>
                                        <EditDeleteDropdown
                                            setSelectedId={() =>
                                                setSelectedId(student.id)
                                            }
                                            setEditModalOpen={setEditModalOpen}
                                            loading={loading}
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        })}

                    {!loading && data && data.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={8} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </article>
    )
}

export default StudentTable
