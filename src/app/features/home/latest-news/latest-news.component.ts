import { Component, OnInit } from '@angular/core';

interface IlatestNewsSlide {
  imagePath: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css',
})
export class LatestNewsComponent implements OnInit {
  IlatestNewsSlides: IlatestNewsSlide[] = [];
  constructor() {}
  ngOnInit(): void {}
}
