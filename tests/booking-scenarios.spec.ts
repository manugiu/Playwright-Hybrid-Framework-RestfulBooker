import {test, expect} from '@playwright/test';
import { AuthClient } from '../api-client/AuthClient';
import { BookingClient } from '../api-client/BookingClient';

test('Should book a hotel room with wrong dates, update them and cancel it ', async ({ request }) => {
    const authClient = new AuthClient(request);
    const token = await authClient.createToken('admin', 'password123') 
    const booking = new BookingClient(request);
    const bookingId = await booking.createBooking("Enzo", "Manuel", 912, true, "2027-10-01", "2027-10-03", "Juanfer")
    const updatedBookingData = await booking.updateBooking(bookingId, token, "Enzo", "Manuel", 912, true, "2018-09-12", "2018-09-22", "Juanfer")
    await booking.deleteBooking(bookingId, token)
    await expect(updatedBookingData.bookingdates.checkin).toBe("2018-09-12")
    await expect(updatedBookingData.bookingdates.checkout).toBe("2018-09-22")
    await expect(booking.getBooking(bookingId)).rejects.toThrow()
});