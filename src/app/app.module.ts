import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {ConfessionCardComponent} from './components/confession-card/confession-card.component';

// services
import {HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import {ConfessionService} from './services/confession.service';

// mdBootstrap
// MDB Angular Pro
import {
  ButtonsModule,
  WavesModule,
  CardsFreeModule
} from 'angular-bootstrap-md';
// import {WavesModule} from 'angular-bootstrap-md';
import {NavbarModule} from 'angular-bootstrap-md';
import {NewConfessionComponent} from './components/new-confession/new-confession.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfessionComponent} from './components/confession/confession.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ConfessionCardComponent,
    NewConfessionComponent,
    ConfessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule,
    WavesModule,
    CardsFreeModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfessionService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
