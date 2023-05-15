import { Offre } from './../../../core/Model/offre';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';
import { CommandeServiceService } from '../../commande/services/commande-service.service';
import { Commande } from 'src/app/models/Commande';

@Component({
  selector: 'app-listoffre',
  templateUrl: './listoffre.component.html',
  styleUrls: ['./listoffre.component.scss']
})
export class ListoffreComponent implements OnInit {
Listoffre:Offre[];
offre:Offre;
idOffre:any;
commande = new Commande();

  constructor(private commandeService:CommandeServiceService,private appeloffreservice:AppeloffreService , private router:Router, private http: HttpClient) { }

  ngOnInit(): void {

      this.appeloffreservice.getAllOffre().subscribe(
        response=> {this.Listoffre=response;
                    console.log(response)},
              error => {  alert("error de recuperation liste devis fournisseur")}
      )


  }
  addCommandeAndAssignToOffre(id:number){
    this.commandeService.AddCommande(id,this.commande).subscribe(
      data => {alert('add success');  this.router.navigate(['/commandeByUser']);},
      error => {alert("add echoué")}
    );
  
   }
  updateOffre(idOffre:number)
{
  this.router.navigate(['/offres/offre/update',idOffre]);
}

}
