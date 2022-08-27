import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogueComponent } from './confirm-dialogue/confirm-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateVehicleComponent, ConfirmDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ConfirmDialogueComponent]
})
export class AppModule { }
