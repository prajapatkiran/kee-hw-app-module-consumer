import { Component, ViewEncapsulation } from '@angular/core';
import { HwAppComponent } from 'kee-hw-app-module/lib';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <nav>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <a routerLink="kee-hw-app" routerLinkActive="active">Kee Hello World App</a>
      <a routerLink="k2" routerLinkActive="active">K2</a>
    </nav>
    <router-outlet></router-outlet>`,
  styleUrls: [
    './app.component.css',
    '~kee-hw-app-module/assets/kee-hw-webapp.css',
    '~@angular/material/core/theming/prebuilt/deeppurple-amber.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'NgModule Heaven';
}
