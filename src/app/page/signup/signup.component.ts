import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private angularFireAuth:AngularFireAuth,
    public router:Router,

  ) { }

  ngOnInit() {
  }
  signup(user:User){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
      console.log(res);
      
    }).catch(error=>{
      console.log("error"+error);
      
    })
  }
}
