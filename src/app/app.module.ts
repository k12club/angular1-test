import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

<<<<<<< HEAD
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

import { RouterModule } from '@angular/router';
import { routes } from './app-rout';
import { UserService } from './service/user.service';
<<<<<<< HEAD
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { NavComponent } from './page/nav/nav.component';
import { SignupComponent } from './page/signup/signup.component';
=======
>>>>>>> parent of 561debe... login,logout

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserComponent,
    DashboardComponent,
    NavComponent,
    SignupComponent
=======
    UserComponent
>>>>>>> parent of 561debe... login,logout
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> parent of 7104bb2... 1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
