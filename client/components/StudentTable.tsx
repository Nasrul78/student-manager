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
    <article className="overflow-x-auto rounded-2xl border">
      <div className="min-w-[800px]">
        <Table className="table-auto">
          <TableHeader className="bg-muted sticky top-0 z-10">
            <TableRow>
              <TableHead className="whitespace-nowrap text-right">ID</TableHead>
              <TableHead className="whitespace-nowrap">Name</TableHead>
              <TableHead className="whitespace-nowrap">Email</TableHead>
              <TableHead className="whitespace-nowrap">Phone</TableHead>
              <TableHead className="whitespace-nowrap">Date of Birth</TableHead>
              <TableHead className="whitespace-nowrap">Gender</TableHead>
              <TableHead className="whitespace-nowrap">Address</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length ? (
              data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="truncate max-w-8 text-right">{item.id}</TableCell>
                  <TableCell className="truncate max-w-[150px]">{item.name}</TableCell>
                  <TableCell className="truncate max-w-[200px]">{item.email}</TableCell>
                  <TableCell className="truncate max-w-[120px]">{item.phone}</TableCell>
                  <TableCell className="truncate max-w-[120px]">{item.dob}</TableCell>
                  <TableCell className="truncate max-w-20 capitalize">{item.gender}</TableCell>
                  <TableCell className="truncate max-w-[200px]">{item.address}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="data-[state=open]:bg-muted text-muted-foreground flex h-8 w-8 items-center justify-center focus:outline-none focus-visible:ring-0 focus-visible:ring-primary rounded- overflow-hidden"
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </article>
  )
}

export default StudentTable
