import { useState } from 'react';
import { getCurrentFormattedDate } from '../utils/booking';
import '../assets/styles/reservation.css';

const BookingForm = ({ reservationData, handleReservationDataChange, availableTimes, dispatchAvailableTimes, submitForm }) => {

    const [ loading, setLoading ] = useState(false);
    const [ validFormField, setValidFormField ] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            const res = submitForm(reservationData);
            if(res === true) {
                setLoading(false); 
            } 
        }, 3000);
    };

    const handleReservationDateFieldChange = (e) => {
        dispatchAvailableTimes({ type: "UPDATE_TIMES", date: new Date(e.target.value) });
        handleReservationDataChange(e);
    };

    return (
        <div className='reservation-container'>
            <h2 data-testid='booking-form-header'>Make a Reservation</h2>
            <form method='post' onSubmit={handleSubmit}>
                <div className='form-item'>
                    <label htmlFor='booking-date'>Choose date</label>
                    <input type="date" id="booking-date" name="booking-date" min={getCurrentFormattedDate()} onChange={handleReservationDateFieldChange} value={reservationData["booking-date"]} required={true} />
                </div>
                <div className='form-item'>
                    <label htmlFor='booking-time'>Choose time</label>
                    <select id='booking-time' name='booking-time' onChange={handleReservationDataChange} value={reservationData["booking-time"]} required={true} >
                        {
                            availableTimes.map(item => <option key={item}>{item}</option>)
                        }
                    </select>
                </div>
                <div className='form-item'>
                    <label htmlFor='no-of-guests'>Number of guests</label>
                    <input type="number" id="no-of-guests" name="no-of-guests" min={1} max={10} onChange={handleReservationDataChange} value={reservationData["no-of-guests"]} required={true} />
                </div>
                <div className='form-item'>
                    <label htmlFor='occasion'>Occasion</label>
                    <select id="occasion" name="occasion" onChange={handleReservationDataChange} value={reservationData["occasion"]} required={true} >
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className='form-item'>
                    <button type='submit' className='standard-btn' aria-label="submit" disabled={loading || !validFormField}>{loading ? "Submitting..." : "Submit"}</button>
                </div>
            </form>
        </div>
    )
}

export default BookingForm;