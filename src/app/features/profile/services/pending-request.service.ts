import { Injectable } from '@angular/core';
import { PendingRequest } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PendingRequestService {
  constructor() {}

  getPendingRequests(): PendingRequest[] {
    return [
      new PendingRequest(
        '1',
        '2024-10-01',
        '2024-10-10',
        '2024-10-24',
        'Salwa Assem'
      ),
      new PendingRequest(
        '2',
        '2024-10-03',
        '2024-10-12',
        '2024-10-14',
        'Salwa Assem'
      ),
      new PendingRequest(
        '3',
        '2024-10-05',
        '2024-10-15',
        '2024-10-25',
        'Salwa Assem'
      ),
      new PendingRequest(
        '4',
        '2024-10-07',
        '2024-10-18',
        '2024-10-28',
        'Salwa Assem'
      ),
    ];
  }
}
