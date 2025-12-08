import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

interface AddressInputProps {
    value: string
}

const AddressInput = ({ value }: AddressInputProps) => {
    return (
        <Field>
            <FieldLabel htmlFor="student-address">Student Address</FieldLabel>
            <Textarea
                id="student-address"
                name="address"
                rows={3}
                defaultValue={value}
                placeholder="Enter student address..."
                className="resize-none"
            />
        </Field>
    )
}

export default AddressInput
