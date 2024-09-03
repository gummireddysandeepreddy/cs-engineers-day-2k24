import useFormContext from "../hooks/useFormContext"

const Transaction = () => {

    const { data, handleChange, handleImageChange } = useFormContext()
    
    const content = (
        <>
            <label htmlFor="TransactionFrom">Payment Platform</label>
            <select id="TransactionFrom" name="TransactionFrom" value={data.Transaction} onChange={handleChange}>
                <option value="">Select Payment Platform</option>
                <option value="GPay">GPay</option>
                <option value="Paytm">Paytm</option>
                <option value="Phonepe">Phonepe</option>
            </select>
            <label htmlFor="TransactionID">Transaction ID</label>
            <input
                type="text"
                id="TransactionID"
                name="TransactionID"
                placeholder="Transaction ID"
                // pattern="[0-9]{12}"
                maxLength="12"
                value={data.TransactionID}
                onChange={handleChange}
            />
            <label htmlFor="TransactionScreenShot">Upload Transaction Screenshot</label>
            <input
                type="file"
                id="TransactionScreenShot"
                name="TransactionScreenShot"
                accept="image/*"
                onChange={handleImageChange}
            />
        </>
    )

    return content
}
export default Transaction