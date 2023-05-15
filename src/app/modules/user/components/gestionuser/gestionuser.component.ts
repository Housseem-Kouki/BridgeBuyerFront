import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Role } from 'src/app/models/role';
import { PrivilegeService } from '../../services/privilege.service';
import { Privilege } from 'src/app/models/privileges';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-gestionuser',
  templateUrl: './gestionuser.component.html',
  styleUrls: ['./gestionuser.component.scss']
})
export class GestionuserComponent implements OnInit {
  searchText: string;
  selectedPrivileges: any[] = [];
  selectedPrivilegesFoeUser: any[] = [];
  newUserData = {role: {privileges:[] } } as any ;

  registerRoleData = {  } as any;
  listusers : User[];
  listprivilegesRole : Privilege[];
  listusersRole : User[];
 
  userForUpdate : User;
  constructor(private roleService : RoleService,private privService : PrivilegeService,
    private userService : UserService,private router: Router) { }
  listroles !: Role[];
  privis !: Privilege[];
  listuser : User[];

  ngOnInit(): void {
     // Récupérer les données de la liste d'utilisateurs depuis votre API ou votre service
     this.userService.getUsers().subscribe((data: User[]) => {
      this.listuser = data;
      this.filteredData = data;
    });
    this.roleService.getRoles().subscribe(
      data => {this.listroles = data},
      error => {'Error de recuperation des roles !'}
    );

    this.privService.AllPrivilege().subscribe(
      data => {this.privis = data},
      error => {alert("Error de recuperation des privileges")}
  );
  }

 
  filterData() {
    if (!this.searchText) {
      this.filteredData = this.listuser;
      return;
    }

    this.filteredData = this.listuser.filter((user: User) => {
      const search = this.searchText.toLowerCase();
      return (
        user.email.toLowerCase().includes(search) ||
        user.fname.toLowerCase().includes(search) ||
        user.lname.toLowerCase().includes(search) ||
        user.role.roleName.toLowerCase().includes(search) ||
        user.phoneNumber.includes(search) ||
        user.createdAt.toString().includes(search)
      );
    });
  }
  openModalUpdateUser(id:number){
this.userService.getUser(id).subscribe(
  data => {this.userForUpdate = data ;$('#exampleModalUpdate').modal('show'); console.log(this.userForUpdate)},
  err => {alert("user introuvable")}
);



  }
  roleData = {} as any;
  addRole(){
    this.roleService.addRole(this.roleData).subscribe(
      data => {alert('add success'); location.reload();},
      error => {alert("add echoué")}
    );
  }


  openModal(){
    $('#exampleModal').modal('show'); 
  }

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
      data => {alert('add success'); location.reload();},
      error => {alert("add echoué")}
     );
  }

  deleteRole(id:number){
    if (window.confirm('Confirmer la supression'+id)){
      this.roleService.deleteRole(id).subscribe(
        data => {alert("suppresion avec succès");location.reload(); },
        error => {alert('suppression erronée');console.log(error);}
      );
    }  
  }

  getprivilegesRole(id:number){
    this.roleService.getListPrivilégesByIdRole(id).subscribe(
      data => {this.listprivilegesRole = data},
      error => {alert("erreur recuperation list priviléges de ce role")}
    );
  }
  getusersRole(id:number){
    this.roleService.getListUsersByIdRole(id).subscribe(
      data => {this.listusersRole = data; console.log(this.listusersRole)},
      error => {alert("erreur recuperation list users de ce role")}
    );
  }




    addNewUser(){
 // Récupérez tous les éléments de case à cocher sélectionnés
 const checkboxes = document.querySelectorAll('input[name="privileges"]:checked');

 // Définissez une variable pour stocker la liste des privilèges sélectionnés
 const selectedPrivilegesFoeUser = [];

 // Parcourez la liste des cases à cocher et ajoutez les privilèges sélectionnés à la liste
 checkboxes.forEach((checkbox) => {
   const privilegeId = parseInt(checkbox.getAttribute('value'));
   selectedPrivilegesFoeUser.push({idPrivilege: privilegeId});
 });

 // Ajoutez la liste des privilèges sélectionnés à l'objet registerRoleData
 this.newUserData.role.privileges = selectedPrivilegesFoeUser;
 console.log(this.newUserData)
 this.userService.AddUser(this.newUserData).subscribe(
  data => {alert("User ajouté avec success"); location.reload();},
  error => {alert("erreur d'ajout un utilisateur")}
 );
   
     
    }




    //tabs
     title = 'Bytes';
 activeTab:string = 'User Management';
  onTabClick(tab){
    this.activeTab = tab;
  }

  onTabUpdated(tabName: string) {
    this.activeTab = tabName;
  }

  deleteUser(id:number){
    if (window.confirm('Confirmer la supression')){
      this.userService.deleteUser(id).subscribe(
        data => {alert("suppresion avec succès");location.reload(); },
        error => {alert('suppression erronée');console.log(error);}
      );
    } 
  }
  

  desActiverUser(id:number){
    if (window.confirm('Confirm Action')){
      this.userService.desActiverUser(id).subscribe(
       
        data => {alert("action success");location.reload(); },
        error => {alert('action erronée');console.log(error);}
      );
    } 
  }

  filteredData: User[];



  removePrivilegeFromUser(){
    alert("salut remove");
  }
}
