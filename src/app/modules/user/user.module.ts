import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionuserComponent } from './components/gestionuser/gestionuser.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { GestionprivilegeComponent } from './components/gestionprivilege/gestionprivilege.component';
import { GestionroleComponent } from './components/gestionrole/gestionrole.component';


@NgModule({
  declarations: [
    GestionuserComponent,
    ConfirmationDialogComponent,
    GestionprivilegeComponent,
    GestionroleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserModule,
    NgbModalModule ,
    //NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [],
})
export class UserModule { }
