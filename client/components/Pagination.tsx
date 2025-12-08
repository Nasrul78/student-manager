import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    ChevronsLeft,
    ChevronLeft,
    ChevronRight,
    ChevronsRight,
} from "lucide-react"

interface PaginationProps {
    from?: number | null
    to?: number | null
    lastPage?: number | null
    total?: number | null
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    perPage: number
    setPerPage: React.Dispatch<React.SetStateAction<number>>
    disabled?: boolean
}

const Pagination = ({
    from,
    to,
    lastPage,
    total,
    currentPage,
    setCurrentPage,
    perPage,
    setPerPage,
    disabled,
}: PaginationProps) => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 my-4">
            <div className="text-muted-foreground text-sm mb-2 lg:mb-0">
                Showing rows {from} to {to} of {total} rows
            </div>

            <div className="flex items-center gap-4">
                <div className="text-sm font-medium mr-4 flex items-center gap-2">
                    Rows per page
                    <Select
                        value={`${perPage}`}
                        disabled={disabled}
                        onValueChange={(value) => {
                            setPerPage(Number(value))
                            if (perPage !== Number(value)) {
                                setCurrentPage(1)
                            }
                        }}>
                        <SelectTrigger
                            size="sm"
                            className="w-20"
                            id="rows-per-page">
                            <SelectValue placeholder={`${perPage}`} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem
                                    key={pageSize}
                                    value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="text-sm font-medium mr-4 hidden lg:block">
                    Page {currentPage} of {lastPage}
                </div>

                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1 || disabled}>
                        <span className="sr-only">Go to first page</span>
                        <ChevronsLeft />
                    </Button>

                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1 || disabled}>
                        <span className="sr-only">Go to previous page</span>
                        <ChevronLeft />
                    </Button>

                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === lastPage || disabled}>
                        <span className="sr-only">Go to next page</span>
                        <ChevronRight />
                    </Button>

                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => setCurrentPage(lastPage!)}
                        disabled={currentPage === lastPage || disabled}>
                        <span className="sr-only">Go to last page</span>
                        <ChevronsRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Pagination
