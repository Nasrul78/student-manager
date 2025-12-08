import { Field, FieldLabel, FieldSet } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface GenderInputProps {
    value?: string
}

const GenderInput = ({ value }: GenderInputProps) => {
    return (
        <FieldSet>
            <FieldLabel htmlFor="student-gender">Student Gender</FieldLabel>
            <RadioGroup name="gender" defaultValue={value}>
                <Field
                    orientation="horizontal"
                    id="student-gender"
                    className="w-fit gap-2">
                    <RadioGroupItem value="male" id="student-radio-male" />
                    <FieldLabel className="mr-2" htmlFor="student-radio-male">
                        Male
                    </FieldLabel>
                    <RadioGroupItem value="female" id="student-radio-female" />
                    <FieldLabel htmlFor="student-radio-female">
                        Female
                    </FieldLabel>
                </Field>
            </RadioGroup>
        </FieldSet>
    )
}

export default GenderInput
