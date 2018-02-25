import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uid:string;
  constructor(
    
    private angularFireAuth:AngularFireAuth,
    public router:Router
  ){
    this.angularFireAuth.authState.subscribe(user=>{
      user!=null?this.router.navigate(['/dash']):this.router.navigate(['/']);
      user!=null?this.uid = user.uid: this.uid = null;
    })
  }
  
}
