import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"

interface TextInputProps {
    label: string
    name: string
    type?: React.HTMLInputTypeAttribute
    placeholder: string
    pattern?: string
    minLength?: number
    maxLength?: number
    required?: boolean
}

const TextInput = ({
    label,
    name,
    type = "text",
    placeholder,
    pattern,
    minLength,
    maxLength,
    required = false,
}: TextInputProps) => {
    const [error, setError] = useState("")

    return (
        <Field>
            <FieldLabel htmlFor={`student-${name}`}>
                Student&apos;s {label}
            </FieldLabel>
            <Input
                id={`student-${name}`}
                name={name}
                type={type}
                placeholder={placeholder}
                pattern={pattern !== undefined ? pattern : undefined}
                minLength={minLength !== undefined ? minLength : undefined}
                maxLength={maxLength !== undefined ? maxLength : undefined}
                required={required}
                onInput={() => setError("")}
                onInvalid={(e) => {
                    e.preventDefault()

                    const err = (e.target as HTMLInputElement).validity

                    if (err.valueMissing) setError(`${label} is required`)
                    else if (err.tooShort) setError(`${label} is too short`)
                    else if (err.tooLong) setError(`${label} is too long`)
                    else if (err.typeMismatch || err.patternMismatch)
                        setError(`${label} format is invalid`)
                }}
            />

            {error && <FieldError>{error}</FieldError>}
        </Field>
    )
}

export default TextInput
