import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ModalComponent } from './components/modal/modal.component'

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  declarations: [NavBarComponent, WelcomeComponent, ModalComponent],
  exports: [NavBarComponent,
    WelcomeComponent,
    ModalComponent,
    AngularFireAuthModule,
    AngularFireDatabaseModule]
})
export class CoreModule { }
