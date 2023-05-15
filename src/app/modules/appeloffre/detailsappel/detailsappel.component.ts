import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-detailsappel',
  templateUrl: './detailsappel.component.html',
  styleUrls: ['./detailsappel.component.scss']
})
export class DetailsappelComponent implements OnInit {
  appeloffre:Appeloffre;
  etat:any;
  ListAppeloffre:Appeloffre[];
  constructor(private appeloffreservice:AppeloffreService , private router:Router) { }

  ngOnInit(): void {

  }
getAppelOffreByEtat(etat:number){
    this.appeloffreservice.getAppelOffreByEtat(etat).subscribe(
      data=>{this.appeloffre=data; console.log(data)},
      error => {  alert("error de recuperation liste appel d'offre")}
    );

  }
}
