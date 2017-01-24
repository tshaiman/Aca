import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';

import {routing} from './app.routing'

@NgModule({
  imports: [
    BrowserModule,
    routing,
    MaterialModule.forRoot()],

  declarations: [AppComponent,
                  AdminComponent,     
                  AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
