import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/* Feature Modules */
import { ContactModule }      from './contact/contact.module';
import { HwAppModule }  from 'kee-hw-app-module/lib';

/* Routing Module */
import { AppRoutingModule }   from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HwAppModule,
    ContactModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
