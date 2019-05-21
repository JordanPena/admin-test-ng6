import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private user: any;

  collapedSideBar: boolean;

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

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}

}
