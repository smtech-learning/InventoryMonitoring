import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Router} from '@angular/router';
import { routing }  from './app.routing';

import { AppComponent } from './app.component';
import {OrderComponent} from './app.ordercomponent';
import {InventoryComponent} from './app.inventorycomponent';
import {SuppliersComponent} from './app.supplierscomponent';
import {RatingsComponent} from './app.ratingscomponent';
import {PageNotFoundComponent} from './app.pagenotfoundcomponent'

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    InventoryComponent,
    SuppliersComponent,
    RatingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
