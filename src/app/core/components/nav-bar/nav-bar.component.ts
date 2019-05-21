import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private user: any;

  num = null;

  private email: string = 'jordan.pena1@gmail.com';
  private senha: string = 'senha@teste';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.auth.currentUserObservable
      .subscribe((user) =>
        this.user = user
      );
  }

  clickBtn(num: any){
    this.num = num
  }

  clickSignUp() {
    this.auth.emailSignUp(this.email, this.senha).then((user) => {
      this.router.navigate(['/login']);
    }).catch(e => {
      console.log(e)
    })
  }

  clickLogin() {
    this.auth.emailLogin(this.email, this.senha).then(() => {
      this.router.navigate(['/painel']);
    }).catch(e => {
      console.log(e)
    });
  }

  clickLogout() {
    this.auth.signOut();
    this.router.navigate(['']);
  }
}
