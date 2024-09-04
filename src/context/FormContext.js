import { createContext, useState } from "react"


const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const title = {
        0: 'Personal Information',
        1: 'Event Details',
        2: 'Payment'
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        pName: "",
        pEmail: "",
        pPhone: "",
        pRegister: "",
        Event: "",
        // pGender: "",
        pYear: "",
        pSection: "",
        TransactionFrom: "",
        TransactionID: "",
    })

    const [transactionScreenShot, setTransactionScreenShot] = useState('');

    const handleImageChange = (event) => {
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.onload = (event1) => {
            const image = event1.target.result;
            console.log(image);
            // Do something with the image variable
        };
        reader.readAsDataURL(file);
        setTransactionScreenShot(reader.result);
    };

    const handleChange = e => {

        const name = e.target.name
        const value = e.target.value;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const {...requiredInputs } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('p'))
        .map(key => data[key])
        .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key === 'Event')
        .map(key => data[key])
        .every(Boolean)

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide, transactionScreenShot, handleImageChange }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext 