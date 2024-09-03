import Personal from "./Personal"
import Event from "./Event"
import Transaction from "./Transaction"
import useFormContext from "../hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Personal />,
        1: <Event />,
        2: <Transaction />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs