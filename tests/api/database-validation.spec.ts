import { test, expect } from '@playwright/test';
import { BookingClient } from '../../api-client/BookingClient';
import { DatabaseHelper } from '../../helpers/DatabaseHelper';

test('Should save and verify booking in database', async ({ request }) => {
    const bookingClient = new BookingClient(request);
    const db = new DatabaseHelper();
    
    await db.connect();
    
    // Create via API
    const response = await bookingClient.createBooking(
        "Database", "Test", 500, true, "2025-03-10", "2025-03-15", "None"
    );
    
    // Save to DB
    await db.saveBooking(response);
    
    // Verify in DB
    const dbRecord = await db.getBookingById(response.bookingid);
    
    expect(dbRecord.firstname).toBe("Database");
    expect(dbRecord.totalprice).toBe(500);
    expect(dbRecord.depositpaid).toBe(true);
    
    // Cleanup
    await db.deleteBooking(response.bookingid);
    await db.disconnect();
});