import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IStudent } from "@/types"
import { EllipsisVertical } from "lucide-react"
import { Button } from "./ui/button"

const StudentTable = ({ data }: { data: IStudent[] }) => {
    return (
        <article className="overflow-hidden rounded-2xl border">
            <Table>
                <TableHeader className="bg-muted sticky top-0 z-10">
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Date of Birth</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead></TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {data.length ? data.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.dob}</TableCell>
                        <TableCell>{item.gender}</TableCell>
                        <TableCell>{item.address}</TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                                        size="icon"
                                    >
                                        <EllipsisVertical />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-32">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                )) : (
                    <TableRow>
                    <TableCell
                      colSpan={8}
                      className="h-24 text-center"
                    >
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