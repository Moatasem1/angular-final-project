import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnChanges, OnInit {
  @Input({ required: true }) pagesNumber!: number;
  @Input({ required: true }) maxViewpagesNumber!: number;
  @Output() pageChanged = new EventEmitter<number>();
  pages: number[] = [];
  currentPage: number = 1;

  nextPage() {
    this.currentPage++;
    const lastPageInView = this.pages[this.pages.length - 1];
    this.pages.shift();
    if (lastPageInView <= this.maxViewpagesNumber)
      this.pages.push(lastPageInView + 1);
    this.pageChanged.emit(this.currentPage);
  }

  prevPage() {
    this.currentPage--;
    const firstPageInView = this.pages[0];
    this.pages.pop();
    this.pages.unshift(firstPageInView - 1);
    this.pageChanged.emit(this.currentPage);
  }

  ngOnInit(): void {
    this.createPagesArray();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createPagesArray();
  }

  createPagesArray() {
    this.pages = Array.from(
      { length: this.maxViewpagesNumber },
      (_, i) => i + 1
    );
  }

  // pageClicked(page: number) {
  //   if (
  //     this.pages[this.pages.length - 1] == page &&
  //     page < this.maxViewpagesNumber
  //   )
  //     this.nextPage();
  //   else if (this.pages[0] == page && page > 2) {
  //     this.prevPage();
  //   }

  //   this.currentPage = page;
  // }
}
