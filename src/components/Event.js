import useFormContext from "../hooks/useFormContext"

const Event = () => {
    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <label htmlFor="eventName">Event Name</label>
            <select id="eventName" name="Event" value={data.eventName} onChange={handleChange}>
                <option value="">Select Event</option>
                <option value="Paper Presentation">Paper Presentation</option>
                <option value="Poster Presentation">Poster Presentation</option>
                <option value="Coding">Coding</option>
                <option value="Quiz">Quiz</option>
                <option value="Web Designing">Web Designing</option>
            </select>
        </>
    )

    return content
}
export default Event