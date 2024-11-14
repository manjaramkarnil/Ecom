import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modul/material/material.module';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { EmomseardchPipe } from './shared/components/emomseardch.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobaileComponent } from './shared/components/mobaile/mobaile.component';
import { EcomdetaolComponent } from './shared/components/ecomdetaol/ecomdetaol.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    EmomseardchPipe,
    MobaileComponent,
    EcomdetaolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
