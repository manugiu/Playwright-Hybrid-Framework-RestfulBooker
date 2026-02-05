import {test, expect} from '@playwright/test';
import AuthClient from '../api-client/AuthClient';
import { BookingClient } from '../api-client/BookingClient';

test('Should validate response schema', async ({ request }) => {
    const booking = new BookingClient(request);
    const response = await booking.createBooking("Enzo", "Manuel", 912, true, '2018-12-09', '2018-12-10', "Juanfer")
    await expect(typeof response.bookingid).toBe('number')
    await expect(typeof response.booking).toBe('object')
    await expect(typeof response.booking.firstname).toBe('string')
    await expect(typeof response.booking.lastname).toBe('string')
    await expect(typeof response.booking.totalprice).toBe('number')
    await expect(typeof response.booking.depositpaid).toBe('boolean')
    await expect(typeof response.booking.bookingdates.checkin).toBe('string')
    await expect(typeof response.booking.bookingdates.checkout).toBe('string')
    await expect(typeof response.booking.additionalneeds).toBe('string')
});
