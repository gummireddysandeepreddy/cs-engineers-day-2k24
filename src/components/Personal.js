import useFormContext from "../hooks/useFormContext"

const Personal = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <label htmlFor="pName">Name</label>
            <input
                type="text"
                id="pName"
                name="pName"
                placeholder="Name Printed on Certificate"
                value={data.pName}
                onChange={handleChange}
            />
            <label htmlFor="pRegister">Registration Number</label>
            <input
                type="text"
                id="pRegister"
                name="pRegister"
                placeholder="2X09XA05XX"
                pattern="2[01234]09[15]A05[0-9A-Z][0-9]"
                maxLength="10"
                value={data.pRegister}
                onChange={handleChange}
            />
            <label htmlFor="pPhone">Phone</label>
            <input
                type="tel"
                id="pPhone"
                name="pPhone"
                placeholder=""
                pattern="[6-9][0-9]{9}"
                value={data.pPhone}
                onChange={handleChange}
            />
            <label htmlFor="pEmail">Email</label>
            <input
                type="email"
                id="pEmail"
                name="pEmail"
                placeholder=""
                value={data.pEmail}
                onChange={handleChange}
            />

            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="pYear">Year</label>
                    <select id="pYear" name="pYear" value={data.pYear} onChange={handleChange}>
                        <option value="">Select Year</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                    </select>
                </div>
                <div className="flex-col">
                    <label htmlFor="pSection">Section</label>
                    <select id="pSection" name="pSection" value={data.pSection} onChange={handleChange}>
                        <option value="">Select Section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                </div>
            </div>
        </div>
    )

    return content
}
export default Personal