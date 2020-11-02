import { GameComponent } from './game/game.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  {path:'', redirectTo:'game', pathMatch: 'full'},
  {path: 'game', component: GameComponent},
  {path:'user', component: UserComponent,
  children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
