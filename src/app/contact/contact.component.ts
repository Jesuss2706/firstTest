import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Contact {
  name: string;
  checkAge: boolean;
  department: string;
  comment: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model = {
    checkAge: false,
    department: '',
    comment: '',
    name: ''
  }

  onSumit(form: NgForm): void{
    console.log('Form values', form);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
