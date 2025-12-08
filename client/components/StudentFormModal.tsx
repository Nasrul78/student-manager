import { Plus } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldSet } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import TextInput from "./TextInput"
import DOBInput from "./DOBInput"
import GenderInput from "./GenderInput"
import AddressInput from "./AddressInput"

interface StudentFormModalProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    disabled?: boolean
}

const StudentFormModal = ({
    handleSubmit,
    open,
    setOpen,
    disabled,
}: StudentFormModalProps) => {
    const textInput = [
        {
            label: "Name",
            name: "name",
            placeholder: "eg. Jenii",
            pattern: "^[a-zA-Z]${3,64}",
            minLength: 3,
            maxLength: 64,
            required: true,
        },
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "eg. jenii@example.com",
            required: true,
        },
        {
            label: "Phone",
            name: "phone",
            type: "tel",
            placeholder: "eg. 08123456789",
            pattern: "[0-9]{10,13}",
            minLength: 10,
            maxLength: 13,
        },
    ]

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    onClick={() => setOpen(true)}
                    disabled={disabled}
                    variant="outline"
                    size="sm">
                    <Plus />
                    <span className="hidden lg:inline">Tambah Siswa</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Tambah Siswa</DialogTitle>
                    <DialogDescription>
                        Tambahkan siswa baru kedalam database API
                    </DialogDescription>
                </DialogHeader>
                <form className="w-full" onSubmit={handleSubmit} noValidate>
                    <FieldSet>
                        <FieldGroup>
                            {textInput.map((input) => (
                                <TextInput key={input.name} {...input} />
                            ))}
                            <DOBInput />
                            <GenderInput />
                            <AddressInput />

                            <Field>
                                <Button className="w-full" type="submit">
                                    Add Student
                                </Button>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default StudentFormModal
