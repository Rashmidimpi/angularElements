import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [ButtonComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  // to use this module for bootstrapping
  ngDoBootstrap() {
    // for converting an angular component together with its dependencies to a custom element
      const customElement = createCustomElement(ButtonComponent, {injector: this.injector});
      customElements.define('app-button', customElement);
  }
 }
