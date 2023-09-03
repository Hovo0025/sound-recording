import {NgModule} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@NgModule()
export class IconsModule {
  private path = '../../../assets/icons';

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry
      .addSvgIcon('repeat', this.setPath(`${this.path}/repeat.svg`))
      .addSvgIcon('prev', this.setPath(`${this.path}/prev.svg`))
      .addSvgIcon('play', this.setPath(`${this.path}/play.svg`))
      .addSvgIcon('pause', this.setPath(`${this.path}/pause.svg`))
      .addSvgIcon('next', this.setPath(`${this.path}/next.svg`))
      .addSvgIcon('volume', this.setPath(`${this.path}/volume.svg`))
      .addSvgIcon('mute', this.setPath(`${this.path}/mute.svg`))

  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
