import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgxEmojiPickerModule } from "ngx-emoji-picker";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AcheteurLayoutComponent } from "./layouts/acheteur-layout/acheteur-layout/acheteur-layout.component";
import { FournisseurLayoutComponent } from "./layouts/fourniseur-layout/fournisseur-layout/fournisseur-layout.component";
import { ForgetpasswordComponent } from "./layouts/auth-layout/forgetpassword/forgetpassword.component";
import { RestpasswordComponent } from "./layouts/auth-layout/restpassword/restpassword.component";
import { DialogModule } from "@ngneat/dialog";
import { SpinnerInterceptor } from "./spinner.interceptor";
import * as $ from "jquery";
import * as bootstrap from "bootstrap";
import { CreateComplaintsComponent } from "./complaints/create-complaints/create-complaints.component";
import { ComplaintDetailComponent } from "./complaints/complaint-detail/complaint-detail.component";
import { UpdateComplaintComponent } from "./complaints/update-complaint/update-complaint.component";
import { ComplaintListComponent } from "./complaints/complaint-list/complaint-list.component";
import { CreateEmplacementComponent } from "./Emplacement/create-emplacement/create-emplacement.component";
import { CreateDepartementComponent } from "./Emplacement/create-departement/create-departement.component";
import { ListEmplacementsComponent } from "./Emplacement/list-emplacements/list-emplacements.component";
import { EmplacementTrieComponent } from "./Emplacement/emplacement-trie/emplacement-trie.component";
import { ListDepartementComponent } from "./Emplacement/list-departement/list-departement.component";
import { ViewEmplacementComponent } from "./Emplacement/view-emplacement/view-emplacement.component";
import { ViewDepartementComponent } from "./Emplacement/view-departement/view-departement.component";
import { CreateAdresseExpedComponent } from "./Emplacement/create-adresse-exped/create-adresse-exped.component";
import { AllAdressExpedComponent } from "./all-adress-exped/all-adress-exped.component";
import { TokenInterceptorService } from "./modules/user/services/token-interceptor.service";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    //NgxEmojiPickerModule.forRoot(),
    AppRoutingModule,
    DialogModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: "square-jelly-box" }),
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-center",
      preventDuplicates: true,
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AcheteurLayoutComponent,
    FournisseurLayoutComponent,
    AuthLayoutComponent,
    ForgetpasswordComponent,
    RestpasswordComponent,
    AppComponent,
    AdminLayoutComponent,
    AcheteurLayoutComponent,
    FournisseurLayoutComponent,
    AuthLayoutComponent,
    ForgetpasswordComponent,
    RestpasswordComponent,
    CreateComplaintsComponent,
    ComplaintDetailComponent,
    UpdateComplaintComponent,
    ComplaintListComponent,
    CreateEmplacementComponent,
    CreateDepartementComponent,
    ListEmplacementsComponent,
    EmplacementTrieComponent,
    ListDepartementComponent,
    ViewEmplacementComponent,
    ViewDepartementComponent,
    CreateAdresseExpedComponent,
    AllAdressExpedComponent,
  ],
  providers: [
   
    { provide: HTTP_INTERCEPTORS  , useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
