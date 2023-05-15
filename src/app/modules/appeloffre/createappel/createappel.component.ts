import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';
@Component({
  selector: 'app-createappel',
  templateUrl: './createappel.component.html',
  styleUrls: ['./createappel.component.scss']
})
export class CreateappelComponent implements OnInit {

  appelOffre: Appeloffre;
  iddemandeachat:any;

  constructor(private appeloffreservice:AppeloffreService , private Router:Router, private currentroute:ActivatedRoute,private http:HttpClient){}

  ngOnInit(): void {
   this.appeloffreservice.getAllAppelOffre();
  }


  add(form:NgForm) {
    console.log(form.value)
    let obj : any = {}
    obj.nomDepartement = form.value.nomDepartement;
    obj.type = form.value.type;
    obj.code = form.value.Code;
    obj.description = form.value.description;
    /*
    this.appeloffreservice.addAndAssignAppelToDemande(this.iddemandeachat).subscribe((res:any) =>{
        console.log(res);

    })
*/

  }

}
