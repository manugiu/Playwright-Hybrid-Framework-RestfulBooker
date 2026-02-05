import {test, expect} from '@playwright/test';
import AuthClient from '../api-client/AuthClient';
import { BookingClient } from '../api-client/BookingClient';

test('Should create a booking', async ({ request }) => {
    const booking = new BookingClient(request);
    const response = await booking.createBooking("Enzo", "Manuel", 912, true, '2018-12-09', '2018-12-10', "Juanfer")
    await expect(typeof response.bookingid).toBe('number')
    await expect(response.bookingid).toBeGreaterThan(0)
});

test('Should get a booking', async ({ request }) => {
    const booking = new BookingClient(request);
    const response = await booking.createBooking("Enzo", "Manuel", 912, true, '2018-12-09', '2018-12-10', "Juanfer")
    const bookingData = await booking.getBooking(response.bookingid)
    await expect(bookingData.firstname).toBe("Enzo")
    await expect(bookingData.lastname).toBe("Manuel")
    await expect(bookingData.totalprice).toBe(912)
});

test('Should update a booking', async ({ request }) => {
    const authClient = new AuthClient(request);
    const token = await authClient.createToken('admin', 'password123');
    const booking = new BookingClient(request);
    const response = await booking.createBooking("Enzo", "Manuel", 912, true, '2018-12-09', '2018-12-10', "Juanfer")
    const bookingData = await booking.getBooking(response.bookingid)
    const bookingDataUpdated = await booking.updateBooking(response.bookingid, token, "Enzo", "Gorda", 912, true, '2018-12-09', '2018-12-10', "Juanfer") 
    await expect (bookingDataUpdated.lastname).toBe("Gorda")
});

test('Should delete a booking', async ({ request }) => {
    const authClient = new AuthClient(request);
    const token = await authClient.createToken('admin', 'password123');
    const booking = new BookingClient(request);
    const response = await booking.createBooking("Enzo", "Manuel", 912, true, '2018-12-09', '2018-12-10', "Juanfer")
    await booking.deleteBooking(response.bookingid, token)
    await expect(booking.getBooking(response.bookingid)).rejects.toThrow()
});