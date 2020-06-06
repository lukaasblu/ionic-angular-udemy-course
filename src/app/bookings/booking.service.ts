import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root'})
export class BookingService {
    
    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            placeTitle: 'Manhattan Mansion',
            userId: 'user1',
            guestNumber: 3
        }
    ]

    get bookings() {
        return [...this._bookings];
    }
}