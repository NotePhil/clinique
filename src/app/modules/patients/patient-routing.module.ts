import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NewPatientComponent } from "./new-patient/new-patient.component";


const routes=[
  {
    path: 'patient-nouveau',
    title: 'Enregistrer un nouveau patient',
    component: NewPatientComponent
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientsRoutingModule{}