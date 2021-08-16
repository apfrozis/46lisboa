import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import  { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

import { LandingComponent } from './examples/landing/landing.component';
import { SignupComponent } from './examples/signup/signup.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { PromotionsComponent } from './examples/promotions/promotions.component';
import { QrcodeComponent } from './examples/qrcode/qrcode.component';
import { AdminPromotionsComponent } from './examples/admin-promotions/admin-promotions.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    SignupComponent,
    ProfileComponent,
    QrcodeComponent,
    PromotionsComponent,
    AdminPromotionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    TextFieldModule,
    MatInputModule,
    NoopAnimationsModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
