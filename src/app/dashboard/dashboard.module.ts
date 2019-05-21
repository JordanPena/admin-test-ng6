import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SideBarComponent, PainelComponent],
  exports: [LoginComponent, SideBarComponent, PainelComponent]
})
export class DashboardModule { }
