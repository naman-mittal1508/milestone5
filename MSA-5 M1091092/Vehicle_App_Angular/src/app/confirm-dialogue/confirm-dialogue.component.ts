import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html',
  styleUrls: ['./confirm-dialogue.component.css']
})
export class ConfirmDialogueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogueComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private _data
  ) { }

  ngOnInit() {
    console.log(this._data);
  }

  closeDialogue(){
    this.dialogRef.close(true);
  }

}
