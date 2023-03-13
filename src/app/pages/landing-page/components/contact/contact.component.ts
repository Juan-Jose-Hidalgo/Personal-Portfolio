import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition, SimpleSnackBar } from '@angular/material/snack-bar';

import { DataForm } from 'src/app/models/form-data.interface';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { ContactService } from '../../services/contact.service';
import { FormValidatorService } from '../../services/form-validator.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup = this.fb.group({
    nombre: [, Validators.required],
    email: [, [Validators.required, Validators.pattern(this.fv.emailPattern)]],
    asunto: [, Validators.required],
    mensaje: [, Validators.required]
  });

  errorClass = 'form__error form__error--visible';
  snackBarDuration = 5;

  constructor(
    private contact: ContactService,
    private fb: FormBuilder,
    private fv: FormValidatorService,
    private snackBar: MatSnackBar
  ) { }

  getErrorMsg(controlName: string) {
    return this.fv.getErrorMsg(controlName, this.contactForm);
  }

  fieldInvalid(fieldName: string) {
    return this.fv.fieldInvalid(fieldName, this.contactForm);
  }

  send() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { nombre, email, asunto, mensaje } = this.contactForm.value;
    const data: DataForm = {
      name: nombre,
      email,
      subject: `Portfolio: ${asunto}`,
      message: mensaje
    }

    this.contact.sendEmail(data).subscribe({
      next: () => {
        this.sendSnackBar('Mensaje enviado', 'snackbar--success');
        this.contactForm.reset();
      },
      error: (error) => {
        this.sendSnackBar('No se ha podido enviar el mensaje', 'snackbar--warning');
        console.log(error);
      }
    })
  }

  sendSnackBar(message: string, className: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: [className]
    })
  }


}
