import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { EllipsisVertical } from "lucide-react"

interface EditDeleteDropdownProps {
    setSelectedId: () => void
    setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    loading: boolean
}

const EditDeleteDropdown = ({
    setSelectedId,
    setEditModalOpen,
    loading,
}: EditDeleteDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="data-[state=open]:bg-muted text-muted-foreground flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden"
                    size="icon">
                    <EllipsisVertical />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem
                    onClick={() => {
                        setSelectedId()
                        setEditModalOpen(true)
                    }}
                    disabled={loading}>
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default EditDeleteDropdown
