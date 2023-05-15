import { Component, EventEmitter, OnInit, Output,ViewChild  } from '@angular/core';
import { Privilege } from 'src/app/models/privileges';
import { PrivilegeService } from '../../services/privilege.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-gestionprivilege',
  templateUrl: './gestionprivilege.component.html',
  styleUrls: ['./gestionprivilege.component.scss']
})
export class GestionprivilegeComponent implements OnInit {
  
  @ViewChild(ConfirmationDialogComponent) confirmationDialog: ConfirmationDialogComponent;
  showAddPrivilegesModal = false;
  listprivis : Privilege[];
  registerPrivilegeData = {  } as any;
  privilegeForUpdate : Privilege;
  constructor(private privilegesService:PrivilegeService ,private toastr: ToastrService  ) { 
    
  }

  ngOnInit(): void {
    this.privilegesService.AllPrivilege().subscribe(
      data => {this.listprivis = data},
      err => {alert("erreur recuperation privileges")}
    );
  }


  addPrivilege(){
    this.privilegesService.AddPrivilege(this.registerPrivilegeData).subscribe(
      data => {
        this.toastr.success('The privilege was successfully added !', 'Notification');
        $('#exampleModalPrivilege').modal('hide');
        this.listprivis.push(data);
     },
      error => {alert("add echoué")}
     );

  
  }

  @Output() tabUpdated = new EventEmitter<string>();
  activeTab:string = 'Privilege Management';
  onTabClick(tab){
    this.activeTab = tab;
  }
  selectedCategorie: string = '';

  deletePrivilege(id: number ,privilegeName : string) {
    this.confirmationDialog.show(`Confirm Privilege Removal  ${privilegeName}`).toPromise().then(result => {
      if (result) {
        this.privilegesService.DeletePrivilege(id).subscribe(
          () => {
            this.listprivis = this.listprivis.filter(privilege => privilege.idPrivilege !== id);
            this.toastr.warning('The privilege was successfully removed !', 'Notification');
          },
          error => {
            this.toastr.error('An error occurred while removing the privilege.', 'Notification');
            console.error(error);
          }
        );
      }
    });
  }


  openModalUpdatePrivilege(id:number){
    this.privilegesService.getPrivilege(id).subscribe(data => {this.privilegeForUpdate = data;  console.log(this.privilegeForUpdate)});
    $('#exampleModalUpdate').modal('show');
  
 }

 updatePrivilege(){
  this.privilegesService.UpdatePrivilege(this.privilegeForUpdate).subscribe(
    data => {  this.toastr.success('The privilege was successfully updated !', 'Notification');
    $('#exampleModalUpdate').modal('hide');
    this.listprivis.push(this.privilegeForUpdate);
   // this.listprivis = this.listprivis.filter(privilege => privilege.idPrivilege !== this.privilegeForUpdate.idPrivilege);
   },
    err => {this.toastr.error('An error occurred while updating the privilege.', 'Notification');}
  );
 }
}
