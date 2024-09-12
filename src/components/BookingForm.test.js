import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { getCurrentFormattedDate, initializeTimes, updateTimes, fetchAPI, submitAPI } from "../utils/booking";

describe("BookingForm", () => {
    test("Form fields are rendered with correct attributes", () => {
        const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        render(
            <BookingForm
                reservationData={{
                    "booking-date": getCurrentFormattedDate(),
                    "booking-time": availableTimes[0],
                    "no-of-guests": 1,
                    "occasion": "Birthday"
                }}
                handleReservationDataChange={jest.fn((e) => e)}
                availableTimes={availableTimes}
                dispatchAvailableTimes={jest.fn((action) => action)}
                submitForm={jest.fn(formData => true)}
            />
        );
        
        const headingElement = screen.getByTestId('booking-form-header');
        expect(headingElement).toHaveTextContent('Make a Reservation');

        const choseDateLabel = screen.getByText("Choose date");
        expect(choseDateLabel).toBeInTheDocument();

        const choseTimeLabel = screen.getByText("Choose time");
        expect(choseTimeLabel).toBeInTheDocument();

        const numberGuestLabel = screen.getByText("Number of guests");
        expect(numberGuestLabel).toBeInTheDocument();

        const occasionLabel = screen.getByText("Occasion");
        expect(occasionLabel).toBeInTheDocument();

        const submitButton = screen.getByText("Submit");
        expect(submitButton).toBeInTheDocument();
    });

    test("Returns the correct initialized times", () => {
        const initializedTimes = initializeTimes();
        expect(initializedTimes).toEqual(fetchAPI(new Date()));
    });
    
    test("Update times returns the new correct state", () => {
        const initialState = initializeTimes();
        const updatedTimes = updateTimes(initialState, { type: "UPDATE_TIMES", date: new Date() });
        expect(initialState).toEqual(updatedTimes);
    });

    test("submitAPI returns true", () => {
        const formData = {
            "booking-date": getCurrentFormattedDate(),
            "booking-time": "17:00 PM",
            "no-of-guests": 2,
            "occasion": "Birthday"
        };
        const res = submitAPI(formData);
        expect(res).toBe(true);
    });
});