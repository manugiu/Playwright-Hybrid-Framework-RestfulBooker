import {test, expect} from '@playwright/test';
import { AuthClient } from '../api-client/AuthClient';
import { BookingClient } from '../api-client/BookingClient';

test('Should fail updating because of no token', async ({ request }) => {
    const booking = new BookingClient(request);
    const bookingdata = await booking.createBooking("Enzo", "Manuel", 912, true, "2027-10-01", "2027-10-03", "Juanfer")
    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingdata.bookingid}`, {
        headers: {
            'Cookie': `token=` // Empty token - should fail
        }, 
        data: {
            "firstname": "Juan",
                "lastname": "Manuel",
                "totalprice": 912,
                "depositpaid": false,
                "bookingdates": {
                    "checkin": '2018-12-09',
                    "checkout": '2018-12-15'
                },
                "additionalneeds": 'Lunch'
        }
        })
    await expect(response.status()).toBe(403)
    
});


test('Should fail deleting because of no token', async ({ request }) => {
    const booking = new BookingClient(request);
    const bookingdata = await booking.createBooking("Enzo", "Manuel", 912, true, "2027-10-01", "2027-10-03", "Juanfer")
    await expect(booking.deleteBooking(bookingdata.bookingid, '')).rejects.toThrow()
});
