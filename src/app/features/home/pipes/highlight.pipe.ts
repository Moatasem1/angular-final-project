import { Pipe, PipeTransform } from '@angular/core';
//move it to shard
@Pipe({
  name: 'Highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, searchQuery: string): string {
    searchQuery = searchQuery.trim();
    if (!value || !searchQuery) {
      return value;
    }

    const regex = new RegExp(searchQuery, 'gi');

    return value.toString().replace(regex, (match: string) => {
      return `<span class='highlight'>${match}</span>`;
    });
  }
}
