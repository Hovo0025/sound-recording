import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { SubjectsService } from '@core/services/subjects.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>();
  public currentTheme!: string;

  constructor(
    private readonly subjectsService: SubjectsService,
    private readonly el: ElementRef
  ) {}

  ngOnInit() {
    this.subjectsService.theme$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((theme) => {
        this.currentTheme = theme;
      });
  }

  public onThemeChange(e: MatSlideToggleChange): void {
    const body = this.el.nativeElement.ownerDocument.body;
    if (e.checked) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      this.currentTheme = 'dark-theme';
      localStorage.setItem('theme', 'dark-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      this.currentTheme = 'light-theme';
      localStorage.setItem('theme', 'light-theme');
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(false);
    this.destroyed$.complete();
  }
}
