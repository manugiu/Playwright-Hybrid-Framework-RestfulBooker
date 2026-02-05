import { Client } from 'pg';

export class DatabaseHelper {
    private client: Client;

    constructor() {
        this.client = new Client({
            host: 'localhost',
            port: 5432,
            database: 'bookings_db',
            user: 'postgres',
            password: 'testpass123'
        });
    }

    async connect() {
        await this.client.connect();
    }

    async disconnect() {
        await this.client.end();
    }

    async saveBooking(bookingData: any) {
        await this.client.query(
            `INSERT INTO bookings (booking_id, firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [
                bookingData.bookingid,
                bookingData.booking.firstname,
                bookingData.booking.lastname,
                bookingData.booking.totalprice,
                bookingData.booking.depositpaid,
                bookingData.booking.bookingdates.checkin,
                bookingData.booking.bookingdates.checkout,
                bookingData.booking.additionalneeds
            ]
        );
    }

    async getBookingById(bookingId: number) {
        const result = await this.client.query(
            'SELECT * FROM bookings WHERE booking_id = $1',
            [bookingId]
        );
        return result.rows[0];
    }

    async deleteBooking(bookingId: number) {
        await this.client.query(
            'DELETE FROM bookings WHERE booking_id = $1',
            [bookingId]
        );
    }

    async clearAllBookings() {
        await this.client.query('DELETE FROM bookings');
    }
}