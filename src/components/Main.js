import { useState, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
import { getCurrentFormattedDate, initializeTimes, updateTimes, submitAPI } from '../utils/booking';

const Main = () => {

    const navigate = useNavigate();

    const [ availableTimes, dispatchAvailableTimes ] = useReducer(updateTimes, null, initializeTimes);

    const [ reservationData, setReservationData ] = useState({
        "booking-date": getCurrentFormattedDate(),
        "booking-time": availableTimes[0],
        "no-of-guests": 1,
        "occasion": "Birthday"
    });

    const handleReservationDataChange = (e) => {
      setReservationData({
          ...reservationData,
          [e.target.name]: e.target.value
      })
    }

    const submitForm = (formData) => {
      const res = submitAPI(formData);
      if(res === true) {
        localStorage.setItem("Booking", JSON.stringify(reservationData));
        navigate('/confirmation');
        return true;
      } else {
        return false;
      }
    }

    return (
      <main style={{paddingTop: "120px"}}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/booking' element={<BookingForm reservationData={reservationData} handleReservationDataChange={handleReservationDataChange} availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} submitForm={submitForm} />} />
            <Route path='/confirmation' element={<ConfirmedBooking />} />
          </Routes>
      </main>
  );
}

export default Main