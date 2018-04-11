import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../service/user.service';
import { error } from 'util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  router: any;
  user:User = {email:'k12club@hotmail.com',password:'123456'};
=======
  user:User = {firstname:'',lastname:''};
>>>>>>> parent of 561debe... login,logout
=======
  user:User = {firstname:'',lastname:''};
>>>>>>> parent of 561debe... login,logout
  users:User[];
  key:string;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    this.getListUser();
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
      this.user = {firstname:'',lastname:''};
   
    });
}

  remove(key:string){
    this.userService.removeUser(key).then(res=>{
      console.log(res);
    })
  }
<<<<<<< HEAD
<<<<<<< HEAD
  login(user:User){
    this.angularFireAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(res=>{
      console.log(res);
      
    }).catch(error=>{
      console.log("error"+error);
      
    })
    // console.log(user);
  }
  // signup(user:User){
  //   this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
  //     console.log(res);
      
  //   }).catch(error=>{
  //     console.log("error"+error);
      
  //   })
  // }
  reset(user:User){
    this.angularFireAuth.auth.sendPasswordResetEmail(user.email).then(res=>{
      console.log(res);
      
    }).catch(error=>{
      console.log("error"+error);
      
    })
  }
  signup(){
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/signup'])
    
  }
=======
>>>>>>> parent of 561debe... login,logout
=======
>>>>>>> parent of 561debe... login,logout
}
