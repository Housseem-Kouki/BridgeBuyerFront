import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { NgbModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { TestComponent } from './demande-achat/test/test.component';

@NgModule({
  imports: [CommonModule, 
    RouterModule,
    
    NgbModule, 
    NgbNavModule, 
    FormsModule],
  declarations: [FooterComponent, 
    NavbarComponent, SidebarComponent, 
    TestComponent],
  exports: [FooterComponent,
     NavbarComponent, 
     SidebarComponent],
})
export class ComponentsModule {}
