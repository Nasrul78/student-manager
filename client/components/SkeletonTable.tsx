import { TableCell, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonTable = () => {
    return (
        <>
            {[...Array(6)].map((_, i) => (
                <TableRow key={i}>
                    {[...Array(8)].map((_, j) => (
                        <TableCell key={j}>
                            <Skeleton className="h-[33px] w-full animate-pulse" />
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    )
}

export default SkeletonTable
