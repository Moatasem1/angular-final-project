import { Component, inject, OnInit } from '@angular/core';
import { IlatestNewsSlide } from '../../interfaces';
import { NgClass } from '@angular/common';
import { LatesNewsService } from '../../services/lates-news.service';
@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [NgClass],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css',
})
export class LatestNewsComponent implements OnInit {
  latesNewsService = inject(LatesNewsService);
  latestNewsSlides: IlatestNewsSlide[] = [];
  constructor() {}
  ngOnInit(): void {
    this.latestNewsSlides = this.latesNewsService.getNews();
  }
}
