import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { PromotionsComponent } from './examples/promotions/promotions.component';
import { LoginComponent } from './examples/login/login.component';
import { AdminPromotionsComponent } from './examples/admin-promotions/admin-promotions.component';

const routes: Routes =[
  
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'nucleoicons', component: NucleoiconsComponent },
    { path: 'user-profile', component: ProfileComponent },
    { path: 'home', component: ComponentsComponent },

    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'promotions', component: PromotionsComponent },
    { path: 'admin-promotions', component: AdminPromotionsComponent }

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
