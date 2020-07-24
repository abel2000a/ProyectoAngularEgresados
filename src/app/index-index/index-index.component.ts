import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { TokenService } from '../services/auth/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-index',
  templateUrl: './index-index.component.html',
  styleUrls: ['./index-index.component.css']
})
export class IndexIndexComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
  	private Auth: AuthService,

  	) { }

 
  ngOnInit() {
  	
  	this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

}
