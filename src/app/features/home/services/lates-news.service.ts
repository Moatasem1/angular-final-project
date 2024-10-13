import { Injectable } from '@angular/core';
import { IlatestNewsSlide } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LatesNewsService {
  constructor() {}

  getNews(): IlatestNewsSlide[] {
    return [
      {
        imagePath: 'https://picsum.photos/id/200/1920/1080',
        title: 'Empowering Growth: Our Path Forward',
        desc: 'We are excited to announce new opportunities for skill development and career growth within the company...',
      },
      {
        imagePath: 'https://picsum.photos/id/201/1920/1080',
        title: 'Innovating for a Sustainable Future',
        desc: 'Our latest projects focus on sustainable practices and innovation, ensuring a better tomorrow for our community...',
      },
      {
        imagePath: 'https://picsum.photos/id/202/1920/1080',
        title: 'Community Engagement: Making a Difference',
        desc: 'Join us in our latest community initiatives designed to give back and create a lasting positive impact...',
      },
    ];
  }
}
