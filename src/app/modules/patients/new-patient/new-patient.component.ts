import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,MaxLengthValidator,MinLengthValidator,ReactiveFormsModule, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients/patients.service';
import {IPatient} from '../../../modele/Patient';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  forme: FormGroup;
  submitted: boolean=false;
  //TODO validation du formulaire. particulièrment les mail; les dates
  constructor(private formBuilder:FormBuilder, private patientService:PatientsService, private router:Router) { 
    this.forme =  this.formBuilder.group({
      nom: ['', Validators.required, Validators.minLength(2), Validators.maxLength(50)],
      prenom: ['', Validators.required, Validators.minLength(2), Validators.maxLength(50)],
      sexe: [''],
      mail: ['', Validators.required, Validators.email, Validators.pattern(".+@.+\.{1}[a-z]{2,3}")],
      //todo initialisation du composant à une date 
      dateNaissance: ['', Validators.required],
      telephone: [''],
      adresse: ['']
    })

  }

  ngOnInit() {
  }

  get f(){
    return this.forme.controls;
  }

  onSubmit(patientInput:any){
    this.submitted=true;
    if(this.forme.invalid) return;
    let patientTemp : IPatient={
      id: Number(9),
      nom:patientInput.nom,
      prenom:patientInput.prenom,
      sexe:patientInput.sexe,
      adresse:patientInput.adresse,
      mail:patientInput.mail,
      telephone:patientInput.telephone,
      dateNaissance:patientInput.dateNaissance
    }
    this.patientService.ajouterPatient(patientTemp).subscribe(
      object => {
        this.router.navigate(['list-patients']);
      },
      error=>{
        console.log(error)
      }
    )
  }

}
