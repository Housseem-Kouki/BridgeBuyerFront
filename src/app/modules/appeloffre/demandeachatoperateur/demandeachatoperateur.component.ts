
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appeloffre } from 'src/app/core/Model/appeloffre';

import { DemandeAchat } from 'src/app/core/Model/demande-achat';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';
import { DemandeAchatOperateurService } from 'src/app/core/services/demande-achat-operateur.service';

@Component({
  selector: 'app-demandeachatoperateur',
  templateUrl: './demandeachatoperateur.component.html',
  styleUrls: ['./demandeachatoperateur.component.scss']
})
export class DemandeachatoperateurComponent implements OnInit {
  listdemandeachat : DemandeAchat[];
  appeloffre :Appeloffre ;
  newapp = { } as any ;
  constructor(private demandeService : DemandeAchatOperateurService , private AppelServ:AppeloffreService , private router:Router)  { }

  ngOnInit(): void {
    this.demandeService.getAllDemandeAchatForOperateur().subscribe(
      data => {this.listdemandeachat = data},
      error =>{alert("error de recuperation liste demande achat")}
    )

  }
Accept(idD:number){
  console.log(this.newapp)
  this.AppelServ.addAndAssignAppelToDemande(this.newapp,idD).subscribe(
    data=>{ this.router.navigate(['appelOffre'])}

  )
}

Refuser(iddemandeachat:number){
  if (window.confirm('Confirmer la supression'+iddemandeachat)){
this.demandeService.Refuser(iddemandeachat)
.subscribe(data =>{alert("suppression avec succes"); location.reload();},
 error => {alert('suppression erronée');console.log(error);})
}}
}
