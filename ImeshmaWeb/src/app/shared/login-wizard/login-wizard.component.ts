import { Component, OnInit } from '@angular/core';

import { AuthService, SocialUser,SocialLoginModule, FacebookLoginProvider, GoogleLoginProvider, AuthServiceConfig } from 'ng4-social-login'

@Component({
  selector: 'app-login-wizard',
  templateUrl: './login-wizard.component.html',
  styleUrls: ['./login-wizard.component.css']

})
export class LoginWizardComponent implements OnInit {

 
  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService) { }

  googleLogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      debugger;
      this.user = userData
    });
  }

  facebookLogin() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      debugger;
      this.user = userData
    });
  }

  ngOnInit() {
    this.facebookLogin();
    this.googleLogin();
  }

}
