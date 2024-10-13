import { Injectable } from '@angular/core';
import { VacationHistory, vacationType } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class VacationHistoryService {
  constructor() {}

  getVacationsHistory(): VacationHistory[] {
    const history = [
      {
        id: '1',
        type: vacationType.ANNUAL,
        startDate: '2024-07-01',
        endDate: '2024-07-10',
      },
      {
        id: '2',
        type: vacationType.SICK,
        startDate: '2024-08-15',
        endDate: '2024-08-17',
      },
      {
        id: '3',
        type: vacationType.UNPAID,
        startDate: '2024-09-05',
        endDate: '2024-09-12',
      },
      {
        id: '4',
        type: vacationType.ANNUAL,
        startDate: '2024-10-01',
        endDate: '2024-10-05',
      },
    ];

    return history.map(
      (history) =>
        new VacationHistory(
          history.id,
          history.type,
          history.startDate,
          history.endDate
        )
    );
  }
}
