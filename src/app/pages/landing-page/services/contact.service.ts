import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataForm } from 'src/app/models/form-data.interface';
import { Environment } from 'src/app/models/environment.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl: string = (environment as Environment).URL;
  constructor(
    private http: HttpClient
  ) { }

  sendEmail(data: DataForm) {
    const url = `${this.baseUrl}portfolio-form`;
    return this.http.post(url, data);
  }
}
