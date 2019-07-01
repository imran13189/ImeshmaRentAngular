import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login-wizard',
  templateUrl: './login-wizard.component.html',
  styleUrls: ['./login-wizard.component.css'],
  providers: [Login]
})
export class LoginWizardComponent implements OnInit {

  login: Login = new Login("", "");
  constructor() { }
  
  ngOnInit() {
  }

}
