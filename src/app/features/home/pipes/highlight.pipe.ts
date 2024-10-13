import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, searchQuery: string): string {
    searchQuery = searchQuery.trim().toLowerCase();

    if (!value || !searchQuery) {
      return value;
    }

    return value
      .toString()
      .toLocaleLowerCase()
      .replace(searchQuery, `<span class='highlight'>${searchQuery}</span>`);
  }
}
