import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private angularFireAuth:AngularFireAuth,
    public router:Router,

  ) { }

  ngOnInit() {
  }

  logout(){
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/'])
    
  }
}
