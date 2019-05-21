import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../core/components/welcome/welcome.component';
import { LoginComponent } from '../dashboard/login/login.component';
import { AuthGuard } from '../core/guards/auth-guard';
import { ModalComponent } from '../core/components/modal/modal.component';
import { PainelComponent } from '../dashboard/painel/painel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'painel',
        component: PainelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cadastre',
        component: ModalComponent
      }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutesModule { }
