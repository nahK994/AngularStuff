import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public _contactForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ContactComponent>,
    private _contactService: ContactService,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit() {
    this._contactForm = this._formBuilder.group({
      ID: [],
      RegNo: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Dept: ['', [Validators.required]],
      CGPA: ['', [Validators.required]]
    });
  }

  onNoClick()
  {
    this.dialogRef.close();
  }

  onSubmit()
  {
    console.log("HaHa");
    this._contactService.addContact(this._contactForm.value);
    this.dialogRef.close();
  }
}
