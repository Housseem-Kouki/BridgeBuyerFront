import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClipboardModule } from "ngx-clipboard";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { NgbModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { UserModule } from "src/app/modules/user/user.module";

// import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DemandeachatModule } from "src/app/modules/demandeachat/demandeachat.module";
import { AppeloffreModule } from "src/app/modules/appeloffre/appeloffre.module";

@NgModule({
  imports: [
    
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    AppeloffreModule,
    ReactiveFormsModule,
   
    
    NgbNavModule,
   // UserModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
  ],
  exports: [RouterModule],
  providers: [
    
  ],
})
export class AdminLayoutModule {}
