import { useState } from 'react';
import { getCurrentFormattedDate } from '../utils/booking';
import '../assets/styles/reservation.css';

const BookingForm = ({ reservationData, handleReservationDataChange, availableTimes, dispathAvailableTimes, submitForm }) => {

    const [ loading, setLoading ] = useState(false);

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
        dispathAvailableTimes({ type: "UPDATE_TIMES", date: new Date(e.target.value) });
        handleReservationDataChange(e);
    };

    return (
        <div className='reservation-container'>
            <h2 data-test-id='booking-form-header'>Make a Reservation</h2>
            <form method='post' onSubmit={handleSubmit}>
                <div className='form-item'>
                    <label htmlFor='booking-date'>Choose date</label>
                    <input type="date" id="booking-date" name="booking-date" min={getCurrentFormattedDate()} onChange={handleReservationDateFieldChange} value={reservationData["booking-date"]}/>
                </div>
                <div className='form-item'>
                    <label htmlFor='booking-time'>Choose time</label>
                    <select id='booking-time' name='booking-time' onChange={handleReservationDataChange} value={reservationData["booking-time"]}>
                        {
                            availableTimes.map(item => <option key={item}>{item}</option>)
                        }
                    </select>
                </div>
                <div className='form-item'>
                    <label htmlFor='no-of-guests'>Number of guests</label>
                    <input type="number" id="no-of-guests" name="no-of-guests" min={1} max={10} onChange={handleReservationDataChange} value={reservationData["no-of-guests"]} />
                </div>
                <div className='form-item'>
                    <label htmlFor='occasion'>Occasion</label>
                    <select id="occasion" name="occasion" onChange={handleReservationDataChange} value={reservationData["occasion"]}>
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className='form-item'>
                    <button type='submit' className='standard-btn' disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
                </div>
            </form>
        </div>
    )
}

export default BookingForm;