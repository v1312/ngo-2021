import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditUserComponent } from './popUp/edit-user/edit-user.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { DonationDetailsComponent } from './admin/donation-details/donation-details.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { DonationTypeListComponent } from './admin/donation-type-list/donation-type-list.component';
import { CheckOutComponent } from './user/check-out/check-out.component';
import { PersonalDetailsComponent } from './user/personal-details/personal-details.component';
import { AuthGuard } from './service/guard/auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserAuthGuard } from './service/guard/user-auth.guard';
import { DonationComponent } from './user/donation/donation.component';
import { AddDonationTypeComponent } from './admin/add-donation-type/add-donation-type.component';
import { DonationViewComponent } from './admin/donation-view/donation-view.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full' },
  {path: 'home', component:HomePageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  
 //admin 
 {path: 'admin-dashboard', component:AdminDashboardComponent ,canActivate:[AuthGuard], 
 children:[
    {path: 'user-list', component:UserListComponent ,canActivate:[AuthGuard]},
    {path: 'add-donation-type', component:AddDonationTypeComponent ,canActivate:[AuthGuard]},
      {path: 'user-list/:_id', component:UserListComponent,canActivate:[AuthGuard] },
      {path: 'editUser/:_id', component:EditUserComponent ,canActivate:[AuthGuard]},
      {path: 'donation-details', component:DonationDetailsComponent,canActivate:[AuthGuard] },
      {path: 'donationType-list', component:DonationTypeListComponent,canActivate:[AuthGuard] },
      {path: 'donation-data-view/:_id', component:DonationViewComponent,canActivate:[AuthGuard] },
    ],
  }, 
//User
  {path: 'user-dashboard', component:UserDashboardComponent,canActivate:[UserAuthGuard] ,
    children:[
      {path: 'donation',component:DonationComponent,canActivate:[UserAuthGuard]},
      {path: 'check-out',component:CheckOutComponent,canActivate:[UserAuthGuard]},
      {path: 'personal-details', component:PersonalDetailsComponent,canActivate:[UserAuthGuard] },
    ]
  },
 
{path: '**', component:ErrorComponent}
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
