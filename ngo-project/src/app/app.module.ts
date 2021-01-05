import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationdialogComponent } from './popUp/confirmationdialog/confirmationdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from './popUp/add-user/add-user.component';
import { ErrorComponent } from './error/error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditUserComponent } from './popUp/edit-user/edit-user.component';
import {MatSelectModule} from '@angular/material/select';
import { DonationDetailsComponent } from './admin/donation-details/donation-details.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DonationTypeListComponent } from './admin/donation-type-list/donation-type-list.component';
import { ConfirmationDialogForDonationTypeComponent } from './popUp/confirmation-dialog-for-donation-type/confirmation-dialog-for-donation-type.component';
import { CheckOutComponent } from './user/check-out/check-out.component';
import { PersonalDetailsComponent } from './user/personal-details/personal-details.component';
import {MatInputModule} from '@angular/material/input';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './service/guard/auth.guard';
import { AdminNavbarComponent } from './navbar/admin-navbar/admin-navbar.component';
import { UserSideNavComponent } from './side-nav/user-side-nav/user-side-nav.component';
import { DonationComponent } from './user/donation/donation.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddDonationTypeComponent } from './admin/add-donation-type/add-donation-type.component';
import { ConvertLetterPipe } from './customPipe/convert-letter.pipe';
import { DonationViewComponent } from './admin/donation-view/donation-view.component';
import { UserNavbarComponent } from './navbar/user-navbar/user-navbar.component';
import { UserInboxComponent } from './user/user-inbox/user-inbox.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    UserListComponent,
    NavbarComponent,
    ConfirmationdialogComponent,
    AddUserComponent,
    ErrorComponent,
    HomePageComponent,
    EditUserComponent,
    DonationDetailsComponent,
    UserDashboardComponent,
    
    RegistrationComponent,
    LoginComponent,
    DonationTypeListComponent,
    ConfirmationDialogForDonationTypeComponent,
    CheckOutComponent,
    PersonalDetailsComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    UserSideNavComponent,
    DonationComponent,
    AddDonationTypeComponent,
    ConvertLetterPipe,
    DonationViewComponent,
    UserNavbarComponent,
    UserInboxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatStepperModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
