import { Component, ElementRef, OnInit } from '@angular/core';
import { SubjectsService } from '@core/services/subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly subjectsService: SubjectsService,
    private readonly el: ElementRef
  ) {}

  ngOnInit(): void {
    this.setTheme();
  }

  setTheme(): void {
    const body = this.el.nativeElement.ownerDocument.body;
    const themeClass = localStorage.getItem('theme');

    if (themeClass) {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      body.classList.add(themeClass);
      this.subjectsService.theme$.next(themeClass);
    }
  }
}
