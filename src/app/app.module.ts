import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ConfessionCardComponent } from './components/confession-card/confession-card.component'

//services
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import {ConfessionService} from './services/confession.service';

//mdBootstrap
// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md'



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ConfessionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule, WavesModule, CardsFreeModule
  ],
  providers: [ConfessionService,{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
