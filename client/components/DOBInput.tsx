import { Input } from "@/components/ui/input"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"

interface DOBInput {
    editValue?: string
}

const DOBInput = ({ editValue }: DOBInput) => {
    const [dobDate, setDobDate] = useState("1")
    const [dobMonth, setDobMonth] = useState("January")
    const [dobYear, setDobYear] = useState("")
    const [error, setError] = useState("")

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const editValues = editValue?.split("-")

    useEffect(() => {
        if (!dobDate || !dobMonth || !dobYear) return

        const monthIndex = months.indexOf(dobMonth) + 1

        const formattedMonth = String(monthIndex).padStart(2, "0")
        const formattedDate = String(dobDate).padStart(2, "0")
        const formattedDob = `${
            dobYear || "1980"
        }-${formattedMonth}-${formattedDate}`

        const dobInput = document.getElementById(
            "dob-hidden"
        ) as HTMLInputElement
        dobInput.value = formattedDob
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dobDate, dobMonth, dobYear])

    return (
        <div className="grid grid-cols-3 gap-4">
            <Field>
                <FieldLabel htmlFor="student-dob-date">Date</FieldLabel>
                <Select
                    name="dob-date"
                    defaultValue={
                        editValues?.[2] === undefined
                            ? undefined
                            : String(editValues?.[2])
                    }
                    onValueChange={(value) => setDobDate(value)}>
                    <SelectTrigger id="student-dob-date">
                        <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                        {[...Array(31)].map((_, index) => (
                            <SelectItem key={index} value={`${index + 1}`}>
                                {index + 1}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </Field>
            <Field>
                <FieldLabel htmlFor="student-dob-month">Month</FieldLabel>
                <Select
                    name="dob-month"
                    defaultValue={
                        editValues?.[1] === undefined
                            ? undefined
                            : months[Number(editValues?.[1]) - 1]
                    }
                    onValueChange={(value) => setDobMonth(value)}>
                    <SelectTrigger id="student-dob-month">
                        <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                        {months.map((month) => (
                            <SelectItem key={month} value={month}>
                                {month}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </Field>
            <Field>
                <FieldLabel htmlFor="student-dob-year">Year</FieldLabel>
                <Input
                    id="student-dob-year"
                    name="dob-year"
                    type="number"
                    pattern="\d{4}"
                    maxLength={4}
                    max={new Date().getFullYear()}
                    placeholder="Year"
                    defaultValue={editValues?.[0]}
                    onChange={(e) => setDobYear(e.target.value)}
                    onInvalid={(e) => {
                        e.preventDefault()

                        const error = (e.target as HTMLInputElement).validity

                        if (error.patternMismatch) setError("Year is too long")
                        else if (error.rangeOverflow)
                            setError("Year cannot exceed current year")
                    }}
                    onInput={() => setError("")}
                />
            </Field>

            {error && <FieldError className="col-span-3">{error}</FieldError>}
            <Input type="hidden" name="dob" id="dob-hidden" />
        </div>
    )
}

export default DOBInput
