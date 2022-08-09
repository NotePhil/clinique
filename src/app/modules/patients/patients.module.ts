import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [NewPatientComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule 
  ]
})
export class PatientsModule { }
