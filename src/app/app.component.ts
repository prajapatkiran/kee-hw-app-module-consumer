import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <nav>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <a routerLink="kee-hw-app" routerLinkActive="active">Kee Hello World App</a>
      <a routerLink="k2" routerLinkActive="active">K2</a>
    </nav>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgModule Heaven';
}
