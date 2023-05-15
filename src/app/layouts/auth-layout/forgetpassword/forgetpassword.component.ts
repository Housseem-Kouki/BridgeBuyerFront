import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetPasswordData = {} as any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  forgetPassword(){
    this.userService.forgetPassword(this.forgetPasswordData.email).subscribe(
      data => {alert("forgot password email has been sent")},
      error => {alert('You have already asked for forgotten password !!')}
    );
    
  }

}
