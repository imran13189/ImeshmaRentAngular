import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BlogsectionComponent } from './home/blogsection/blogsection.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { MainComponent } from './home/main/main.component';
import { PropertiesSectionComponent } from './home/properties-section/properties-section.component';
import { FeatureSectionComponent } from './home/feature-section/feature-section.component';
import { ModalPopupComponent } from './shared/modal-popup/modal-popup.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginWizardComponent } from './shared/login-wizard/login-wizard.component';
import { FormWizardModule } from 'angular2-wizard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogsectionComponent,
    HeroSectionComponent,
    MainComponent,
    PropertiesSectionComponent,
    FeatureSectionComponent,
    ModalPopupComponent,
    LoginWizardComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalPopupComponent]
})
export class AppModule { }
