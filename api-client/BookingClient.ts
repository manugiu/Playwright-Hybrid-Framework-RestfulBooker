import { APIRequestContext } from "@playwright/test";

export class BookingClient {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async createBooking(firstname: string, lastname: string, totalprice: number, depositpaid: boolean, checkin: string, checkout: string, additionalneeds: string){
        const response = await this.request.post('/booking', {
            data: {
                "firstname": firstname,
                "lastname": lastname,
                "totalprice": totalprice,
                "depositpaid": depositpaid,
                "bookingdates": {
                    "checkin": checkin,
                    "checkout": checkout
                },
                "additionalneeds": additionalneeds
            }
        }) 
            if (!response.ok()) {
        throw new Error(`Post failed with status: ${response.status()}`);
    }
    
    const body = await response.json();
    
    if (!body.bookingid) {
        throw new Error('No token in response');
    }
    
    return body.bookingid;
}

    async getBooking(bookingId: number){
        const id = bookingId
        const response = await this.request.get(`/booking/${id}`) 
        if (!response.ok()) {
        throw new Error(`Get failed with status: ${response.status()}`);
    }
    
        const body = await response.json();
        
        if (!body) {
            throw new Error('No body in response');
        }
        
        return body;
}

async updateBooking(bookingId: number, token: string, firstname: string, lastname: string, totalprice: number, depositpaid: boolean, checkin: string, checkout: string, additionalneeds: string ){
        const id = bookingId
        const response = await this.request.put(`/booking/${id}`, {
        headers: {
            'Cookie': `token=${token}`
        }, 
        data: {
            "firstname": firstname,
                "lastname": lastname,
                "totalprice": totalprice,
                "depositpaid": depositpaid,
                "bookingdates": {
                    "checkin": checkin,
                    "checkout": checkout
                },
                "additionalneeds": additionalneeds
        }
        })
        if (!response.ok()) {
        throw new Error(`Put failed with status: ${response.status()}`);
    }
    
        const body = await response.json();
        
        if (!body) {
            throw new Error('No body in response');
        }
        
        return body;
}

async deleteBooking(bookingId: number, token: string){
        const id = bookingId
        const response = await this.request.delete(`/booking/${id}`, {
        headers: {
            'Cookie': `token=${token}`
        }
        })
        if (!response.ok()) {
        throw new Error(`Delete failed with status: ${response.status()}`);
    }
        
        return response.status();
}

}
export default BookingClient;