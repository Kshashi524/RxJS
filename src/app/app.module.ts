import {BrowserModule} from '@angular/platform-browser';

import {MDBBootstrapModulesPro, MDBSpinningPreloader, ToastModule, ToastService} from 'ng-uikit-pro-standard';

import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [MDBSpinningPreloader, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
