import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})


export class CreateVehicleComponent implements OnInit {
vehicleForm : FormGroup

vehicles : any[] = []

  states: State[] = [
    {value: 'Tamilnadu', viewValue: 'tamilnadu'},
    {value: 'Kerala', viewValue: 'kerala'},
    {value: 'Karnataka', viewValue: 'karnataka'},
  ];

  cities: City[] = [
    {value: 'Chennai', viewValue: 'chennai'},
    {value: 'Coimbatore', viewValue: 'coimbatore'},
    {value: 'Trichy', viewValue: 'trichy'},
    {value: 'Thiruvananthapuram', viewValue: 'thiruvananthapuram'},
    {value: 'Kottayam', viewValue: 'kottayam'},
    {value: 'Bangalore', viewValue: 'bangalore'},
    {value: 'Mysore', viewValue: 'mysore'},
    {value: 'Udupi', viewValue: 'udupi'},
  ];

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.vehicleForm = this.formBuilder.group(
      {
        "vehicleName": [''],
        "vehicleRegistrationNo": [''],
        "vehicleType": [''],
        "state": [''],
        "city": ['']
      }
    );
  }
  selectCity(data){
  console.log(data)
  }
  addVehicle(){
    console.log(this.vehicleForm.value)
    this.vehicles.push(this.vehicleForm.value);

    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      maxWidth: "400px",
      data: {"title":"Success!", "message" : "Vehicle Added Successfully!"}
    });

    //API INTEGRATION CODES WILL COMES HERE..
  }

}


export interface State {
  value: string;
  viewValue: string;
}
export interface City {
  value: string;
  viewValue: string;
}