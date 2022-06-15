import React, { useState } from 'react';

const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date,
        };
        console.log(newEntry);
    }

    return (
        <form onSubmit={handleSubmit}>
            <labe>Weight</labe>
            <input type="number" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))} />
            <labe>Date</labe>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddEntryForm;