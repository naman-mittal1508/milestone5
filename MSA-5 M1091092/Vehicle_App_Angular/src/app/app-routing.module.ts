import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';


const routes: Routes = [{
  path: "",
  component: CreateVehicleComponent, 
  pathMatch: "full",
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
