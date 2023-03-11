import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorService } from '../../services/form-validator.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup = this.fb.group({
    name: [, Validators.required],
    email: [, [Validators.required, Validators.pattern(this.fv.emailPattern)]],
    subject: [, Validators.required],
    message: [, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private fv: FormValidatorService
  ) { }

  send() {
    console.log(this.contactForm)
  }
}
