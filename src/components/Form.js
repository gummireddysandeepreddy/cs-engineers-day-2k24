import FormInputs from './FormInputs'
import useFormContext from "../hooks/useFormContext"

const Form = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
        transactionScreenShot
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(JSON.stringify(data))
        const d = data
        d.TransactionScreenShot = transactionScreenShot
        console.log(d)
        const response = await fetch("https://script.google.com/macros/s/AKfycbwbGXLSYuKnvS1Id2pyMBV4OWnnNPIWMlROTU5I9P34hB51lyCg1Y0fr7Vyxp3LQKNPkg/exec",{
            method:'Post',
            mode:'cors',
            headers:{'Content-Type':'text/plain',
                'Access-Control-Request-Method':'POST'
            },
            body: JSON.stringify(d)
        });
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dat = await response.json();
        console.log(dat);
    }


    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>

            <header className="form-header">
                <h2>{title[page]}</h2>

                <div className="button-container">

                    <button type="button" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>

                    <button type="button" className={`button ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>

                    <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button>
                </div>
            </header>


            <FormInputs />

        </form>
    )

    return content
}
export default Form