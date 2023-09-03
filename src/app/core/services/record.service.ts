import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IRecordItem } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private recordList: IRecordItem[] = [
    {
      id: 1,
      source: './assets/audio/audio_1.mp3',
      title: 'Smaple 1',
      cover:
        'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/0192518158455/1627254336/srch_believe_A10320WT040063474A.jpg',
    },
    {
      id: 2,
      source: './assets/audio/audio_2.mp3',
      title: 'Sample 2',
      cover: 'https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg',
    },
    {
      id: 3,
      source: './assets/audio/audio_3.mp3',
      title: 'Sample 3',
      cover:
        'https://img.wynk.in/unsafe/100x100/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616846082307/1649154322/srch_believe_A10320WT0431314701.jpg',
    },
  ];

  getRecords(): Observable<IRecordItem[]> {
    return of(this.recordList);
  }
}
