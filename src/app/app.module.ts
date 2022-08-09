import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationComponent } from './modules/communication/communication.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PatientsModule } from './modules/patients/patients.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDBService } from './backend/backend';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemDBService),
    PatientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
