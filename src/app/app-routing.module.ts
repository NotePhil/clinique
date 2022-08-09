import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsRoutingModule } from './modules/patients/patient-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [PatientsRoutingModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
