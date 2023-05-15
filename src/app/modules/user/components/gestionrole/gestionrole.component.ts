import { Component, OnInit ,EventEmitter, Output,ViewChild} from '@angular/core';
import { RoleService } from '../../services/role.service';
import { PrivilegeService } from '../../services/privilege.service';
import { Role } from 'src/app/models/role';
import { Privilege } from 'src/app/models/privileges';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { data } from 'jquery';

@Component({
  selector: 'app-gestionrole',
  templateUrl: './gestionrole.component.html',
  styleUrls: ['./gestionrole.component.scss']
})
export class GestionroleComponent implements OnInit {
  @ViewChild(ConfirmationDialogComponent) confirmationDialog: ConfirmationDialogComponent;
  @Output() tabUpdated = new EventEmitter<string>();
// public page = 5;
public pageSize = 5;
page: number = 1;

  registerRoleData = {  } as any;
  listroles !: Role[];
  listprivilegesRole!: Privilege[];
  listusersRole!:User[];
  privis !: Privilege[];

  roleForUpdate : Role;
  constructor(private roleService : RoleService,private privService : PrivilegeService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.roleService.getRoles().subscribe(
      data => {this.listroles = data},
      error => {'Error de recuperation des roles !'}
    );
    this.privService.AllPrivilege().subscribe(
      data => {this.privis = data},
      error => {       this.toastr.error('An error occurred while added the role.', 'Notification');}
  );

  }
  showAddRoleModal = false;
  addRoleWithPrivileges(){
    // Récupérez tous les éléments de case à cocher sélectionnés
    const checkboxes = document.querySelectorAll('input[name="privileges"]:checked');

    // Définissez une variable pour stocker la liste des privilèges sélectionnés
    const selectedPrivileges = [];

    // Parcourez la liste des cases à cocher et ajoutez les privilèges sélectionnés à la liste
    checkboxes.forEach((checkbox) => {
      const privilegeId = parseInt(checkbox.getAttribute('value'));
      selectedPrivileges.push({idPrivilege: privilegeId});
    });

    // Ajoutez la liste des privilèges sélectionnés à l'objet registerRoleData
    this.registerRoleData.privileges = selectedPrivileges;
    this.registerRoleData.etatrole=true;
    // Affichez l'objet registerRoleData dans la console
    console.log(this.registerRoleData);

    this.roleService.addRoleWithPrivileges(this.registerRoleData).subscribe(
     data => { this.toastr.success('The role was successfully added !', 'Notification'); this.listroles.push(data);  $('#exampleModalRole').modal('hide');
     this.showAddRoleModal = false; this.tabUpdated.emit('Role Management');},
     error => {alert("add echoué")}
    );
 }


  privilegesRole(id:number){
    alert("salut")
    this.roleService.getListPrivilégesByIdRole(id).subscribe(
      data => {this.listprivilegesRole = data},
      error => {alert("erreur recuperation list priviléges de ce role")}
    );
  }

  usersRole(id:number){
    this.roleService.getListUsersByIdRole(id).subscribe(
      data => {this.listusersRole = data; console.log(this.listusersRole)},
      error => {alert("erreur recuperation list users de ce role")}
    );
  }

  activeTab:string = 'Role Management';
  onTabClick(tab){
    this.activeTab = tab;
  }



  deleteRole(role:Role) {
    this.confirmationDialog.show(`Confirm Role Removal  ${role.roleName}`).toPromise().then(result => {
      if (result) {
        this.roleService.deleteRole(role.idRole).subscribe(
          () => {
            this.listroles = this.listroles.filter(r => r.idRole !== role.idRole);
            this.toastr.warning('The role was successfully removed !', 'Notification');
          },
          error => {
            this.toastr.error('An error occurred while removing the role.', 'Notification');
            console.error(error);
          }
        );
      }
    });
  }





      openModalUpdateRole(role:Role){
       // this.privilegesService.getPrivilege(id).subscribe(data => {this.privilegeForUpdate = data;  console.log(this.privilegeForUpdate)});
      this.roleForUpdate = role;
      console.log(this.roleForUpdate)
        $('#modalupdaterole').modal('show');
      
     }

     updateRole(){
      console.log(this.roleForUpdate)
      this.roleService.updateRole(this.roleForUpdate).subscribe(
        data => {this.toastr.warning("Role updated !",'Notification'), $('#modalupdaterole').modal('hide');},
        err => {this.toastr.error("Error in Role update !",'Notification')}
      )
     }


     hasPrivilege(privilege: any): boolean {
      return this.roleForUpdate.privileges.some(x => x.idPrivilege === privilege.idPrivilege);
    }

    togglePrivilegeSelection(privilege: any, isChecked: boolean) {
      if (isChecked) {
        this.roleForUpdate.privileges.push(privilege);
      } else {
        const index = this.roleForUpdate.privileges.findIndex(p => p.idPrivilege === privilege.idPrivilege);
        if (index >= 0) {
          this.roleForUpdate.privileges.splice(index, 1);
        }
      }
    }

    removePrivilege(pup: any) {
      const index = this.roleForUpdate.privileges.indexOf(pup);
      if (index !== -1) {
        this.roleForUpdate.privileges.splice(index, 1);
       // this.privis.push(pup);
      }
    }
}
