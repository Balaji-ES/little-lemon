import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { getCurrentFormattedDate, initializeTimes, updateTimes, fetchAPI } from "../utils/booking";

// test('Renders the BookingForm heading', () => {
//     render(<BookingForm reservationData={reservationData} handleReservationDataChange={handleReservationDataChange} availableTimes={initializeTimes()} dispathAvailableTimes={dispathAvailableTimes} />);
//     const headingElement = screen.getByTestId('booking-form-header');
//     console.log(headingElement)
//     expect(headingElement).toHaveTextContent('Make a Reservation');
// });

test("Returns the correct initialized times", () => {
    const initializedTimes = initializeTimes();
    expect(initializedTimes).toEqual(fetchAPI(new Date()));
});

test("Update times returns the new correct state", () => {
    const initialState = initializeTimes();
    const updatedTimes = updateTimes(initialState, { type: "UPDATE_TIMES", date: new Date() });
    expect(initialState).toEqual(updatedTimes);
});