import { Injectable } from '@angular/core';
import { IVacationRequests } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class VacationRuquestService {
  constructor() {}

  getVacationRequests(): IVacationRequests[] {
    return [
      {
        id: '1',
        firstName: 'Emma',
        lastName: 'Johnson',
        imagePath: 'https://randomuser.me/api/portraits/women/40.jpg',
        submittedOn: '2024-10-01T08:30:00Z',
        startDate: '2024-10-10T00:00:00Z',
        endDate: '2024-10-15T00:00:00Z',
        salary: 5000,
      },
      {
        id: '2',
        firstName: 'Sophia',
        lastName: 'Williams',
        imagePath: 'https://randomuser.me/api/portraits/women/41.jpg',
        submittedOn: '2024-10-02T09:00:00Z',
        startDate: '2024-10-20T00:00:00Z',
        endDate: '2024-10-25T00:00:00Z',
        salary: 6000,
      },
      {
        id: '3',
        firstName: 'Olivia',
        lastName: 'Brown',
        imagePath: 'https://randomuser.me/api/portraits/women/42.jpg',
        submittedOn: '2024-10-03T10:15:00Z',
        startDate: '2024-10-30T00:00:00Z',
        endDate: '2024-11-05T00:00:00Z',
        salary: 5500,
      },
      {
        id: '4',
        firstName: 'Ava',
        lastName: 'Davis',
        imagePath: 'https://randomuser.me/api/portraits/women/43.jpg',
        submittedOn: '2024-10-04T11:45:00Z',
        startDate: '2024-11-10T00:00:00Z',
        endDate: '2024-11-15T00:00:00Z',
        salary: 6200,
      },
    ];
  }
}
