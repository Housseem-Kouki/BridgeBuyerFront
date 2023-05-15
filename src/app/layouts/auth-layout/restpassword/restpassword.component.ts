import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'app-restpassword',
  templateUrl: './restpassword.component.html',
  styleUrls: ['./restpassword.component.scss']
})
export class RestpasswordComponent implements OnInit {
  resetPasswordData = {} as any;
  constructor(private recp:ActivatedRoute, private userService:UserService,private r: Router ) { }
  token!:string;
  ngOnInit(): void {
    this.recp.paramMap.subscribe(
      params => this.token= String(params.get('token'))  
      );
  }

  resetPassword(){
    this.userService.resetPassword(this.resetPasswordData,this.token).subscribe(
      data => {alert("password was changed successfully");this.r.navigate(['login'])},
      error => {alert("problem woth reset password !")}
    )
 
  }
}
