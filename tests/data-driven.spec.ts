import {test, expect} from '@playwright/test';
import AuthClient from '../api-client/AuthClient';
import { BookingClient } from '../api-client/BookingClient';


const bookingTestData = [
    { firstname: "John", lastname: "Quintero", totalprice: 100, depositpaid: true, checkin: '2016-12-10', checkout: '2016-12-15', additionalneeds: 'Lunch'},
    { firstname: "Maria", lastname: "García", totalprice: 999999999999999999, depositpaid: true, checkin: '2016-10-10', checkout: '2016-12-10', additionalneeds: 'Breakfast'},
    { firstname: "李", lastname: "明", totalprice: 300, depositpaid: false, checkin: '2016-10-10', checkout: '2016-10-13', additionalneeds: 'Water'},
    { firstname: "A".repeat(50), lastname: "E", totalprice: 500, depositpaid: true, checkin: '2016-12-10', checkout: '2016-12-15', additionalneeds: 'Vegan'},
    { firstname: "Unusual", lastname: "Dates", totalprice: 200, depositpaid: false, checkin: '2009-12-10', checkout: '2018-12-15', additionalneeds: 'Nothing'}
];

for (const data of bookingTestData){
    test(`Should create a booking for ${data.firstname}`, async ({ request }) => {
        const booking = new BookingClient(request);
        const response = await booking.createBooking(data.firstname, data.lastname, data.totalprice, data.depositpaid, data.checkin, data.checkout, data.additionalneeds)
        await expect(typeof response.bookingid).toBe('number')
        await expect(response.bookingid).toBeGreaterThan(0)
});
}