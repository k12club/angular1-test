import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './page/user/user.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

import { RouterModule } from '@angular/router';
import { routes } from './app-rout';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCqT_rsLQXbnRleMS2m6dMdvbHGsn_ctBY",
      authDomain: "project-169022.firebaseapp.com",
      databaseURL: "https://project-169022.firebaseio.com",
      projectId: "project-169022",
      storageBucket: "project-169022.appspot.com",
      messagingSenderId: "1089384386922"
    }),
    AngularFireDatabaseModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
