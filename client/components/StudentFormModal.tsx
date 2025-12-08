import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldSet } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import TextInput from "./TextInput"
import DOBInput from "./DOBInput"
import GenderInput from "./GenderInput"
import AddressInput from "./AddressInput"
import { IStudent } from "@/types"

interface StudentFormModalProps {
    data?: IStudent
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const StudentFormModal = ({
    data,
    handleSubmit,
    open,
    setOpen,
}: StudentFormModalProps) => {
    const textInput = [
        {
            label: "Name",
            name: "name",
            placeholder: "eg. Jenii",
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
        },
    ]

    const dataValues: Record<string, string> = {
        name: data?.name || "",
        email: data?.email || "",
        phone: data?.phone || "",
        dob: data?.dob || "",
        gender: data?.gender || "",
        address: data?.address || "",
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
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
                                <TextInput
                                    key={input.name}
                                    {...input}
                                    value={dataValues[input.name]}
                                />
                            ))}
                            <DOBInput editValue={dataValues.dob} />
                            <GenderInput value={dataValues.gender} />
                            <AddressInput value={dataValues.address} />

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
