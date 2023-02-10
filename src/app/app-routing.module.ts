import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailesComponent } from './user-detailes/user-detailes.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users/:id', component: UserDetailesComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'error', component:ErrorComponent},
  {path: '**', redirectTo: 'error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
