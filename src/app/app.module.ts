import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemContainerComponent } from './item-container/item-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
