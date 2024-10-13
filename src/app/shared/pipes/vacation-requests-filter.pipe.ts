import { Pipe, PipeTransform } from '@angular/core';
import { VacationRequests } from '../interfaces';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'vacationRequestsFilter',
  standalone: true,
})
export class VacationRequestsFilterPipe implements PipeTransform {
  transform(
    vacationRequests: VacationRequests[],
    searchQuery: string
  ): VacationRequests[] {
    searchQuery = searchQuery.trim();
    if (!searchQuery || !vacationRequests) return vacationRequests;

    const datePipe = new DatePipe('en-US');
    return vacationRequests.filter(
      (request) =>
        request.fullName.toLocaleLowerCase().includes(searchQuery) ||
        datePipe
          .transform(request.submittedOn, 'dd/MM/yyyy')
          ?.toLocaleLowerCase()
          .includes(searchQuery) ||
        request.duration.toLocaleLowerCase().includes(searchQuery) ||
        request.salary.toString().toLocaleLowerCase().includes(searchQuery) ||
        request.duration.toLocaleLowerCase().includes(searchQuery)
    );
  }
}
