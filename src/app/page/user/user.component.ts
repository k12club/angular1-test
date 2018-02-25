import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../service/user.service';
import { error } from 'util';
import { AngularFireAuth } from 'angularfire2/auth';
import { resource } from 'selenium-webdriver/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User = {email:'k12club@hotmail.com',password:'123456'};
  users:User[];
  key:string;

  constructor(
    private userService:UserService,
    private angularFireAuth:AngularFireAuth,
  ) { }

  ngOnInit() {
    // this.getListUser();
  }

  save(user:User){
    console.log(user);
    this.userService.saveUser(user).then(res=>{
      
      console.log(res);
   
    });

  }

  async getListUser(){
    await this.userService.getUserList().subscribe(userList=>{
      this.users =userList;
      console.log(this.users);
    })
  }

  modify(user){
    this.key = user.$key;
    this.user = user;
  }
  update(user:User){
    console.log(user);
    this.userService.UpdateUser(this.key,user).then(res=>{
      
      console.log(res);
      this.key='';
      this.user = {email:'',password:''};
   
    });
}

  remove(key:string){
    this.userService.removeUser(key).then(res=>{
      console.log(res);
    })
  }
  login(user:User){
    this.angularFireAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(res=>{
      console.log(res);
      
    }).catch(error=>{
      console.log("error"+error);
      
    })
    // console.log(user);
  }
  signup(user:User){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
      console.log(res);
      
    }).catch(error=>{
      console.log("error"+error);
      
    })
  }
  reset(user:User){
    this.angularFireAuth.auth.sendPasswordResetEmail(user.email).then(res=>{
      console.log(res);
      
    }).catch(error=>{
      console.log("error"+error);
      
    })
  }
}

