import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/core/Model/offre';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-creatoffre',
  templateUrl: './creatoffre.component.html',
  styleUrls: ['./creatoffre.component.scss']
})
export class CreatoffreComponent implements OnInit {
  newoffre = { } as any ;
  idDevisFourniseur!:any;
  offre:Offre;
  registerOffreData = {  } as any;
  showAddOffreModal = false ;
  constructor(private appeloffreservice:AppeloffreService , private router:Router) { }

  ngOnInit(): void {

this.appeloffreservice.getAllOffre().subscribe(details => {
  this.newoffre = details;});

  }
add(offre:Offre ,idDevisFourniseur:number){
  console.log(this.newoffre)
  this.appeloffreservice.addoffre(offre,idDevisFourniseur)
  .subscribe(
    data=>{this.newoffre=data; console.log(data)}

  )
}

addOffre(){
  console.log(this.registerOffreData)
}

}
