import { useState } from "react";


const useForm = ({ defaultValues }) => {
    const [values, setValues] = useState(defaultValues)

    const handleChangeValue = (key = "", newValue = "") => {
        setValues({
            ...values,
            [key]: newValue,
        })
    }

    const getValue = (key) => {
        return values[key] || "";
    }

    return {
        values,
        getValue,
        handleChangeValue,
    }
}

export default useForm;