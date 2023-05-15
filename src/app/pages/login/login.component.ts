import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/modules/user/services/login.service';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private loginService : LoginService , private userService:UserService,private router:Router
    ,private toastr: ToastrService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  currentUser !: User;
  login(loginForm:NgForm){
    this.loginService.Login(loginForm.value).subscribe(
      data => {//alert("Welcome ! "); 
                localStorage.setItem("accessToken",data.accessToken) ; 
                this.userService.getUserFromToken(data.accessToken).subscribe(
                  data => {this.currentUser = data
                    localStorage.setItem("idUser",String(this.currentUser.idUser)) ;

                    if(this.currentUser.role.roleName == "admin" || this.currentUser.role.roleName == "operateur"){
                     // alert("");
                      this.toastr.success('Bienvenue dans espace admin !', 'Notification');
                        this.router.navigate(['/gestionuser']);
    
                    }  if(this.currentUser.role.roleName == "acheteur"){
                        this.toastr.success('Bienvenue dans espace acheteur !', 'Notification');
                      //alert("Bienvenue dans l'espace acheteur");
                        this.router.navigate(['/dashboard']);
    
                    }  if(this.currentUser.role.roleName == "fournisseur"){
                        this.toastr.success('Bienvenue dans espace fournisseur !', 'Notification');
                      //alert("Bienvenue dans l'espace fournisseur");
                        this.router.navigate(['/commandeByFournisseur']);
    
                    }   }
                ) ; 
                 
            },
      err => { this.toastr.error('Erreur dauthentification', 'Notification');});
   
  }

}
