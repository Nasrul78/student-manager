import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { EllipsisVertical } from "lucide-react"

const EditDeleteDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="data-[state=open]:bg-muted text-muted-foreground flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden"
                    size="icon">
                    <EllipsisVertical />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default EditDeleteDropdown
