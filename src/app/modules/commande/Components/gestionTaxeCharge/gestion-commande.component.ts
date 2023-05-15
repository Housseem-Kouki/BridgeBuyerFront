import { ChargeFinanciereServiceService } from '../../services/charge-financiere-service.service';
import { TaxeServiceService } from '../../services/taxe-service.service';
import { Component, OnInit } from '@angular/core';

import * as bootstrap from 'bootstrap';
import * as $ from "jquery"
import { Taxe } from 'src/app/models/Taxe';
import { ChargeFinanciere } from 'src/app/models/ChargeFinanciere';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gestion-commande',
  templateUrl: './gestion-commande.component.html',
  styleUrls: ['./gestion-commande.component.scss']
})
export class GestionCommandeComponent implements OnInit {
/// taxe
listecharge: ChargeFinanciere[] = [];
charge: ChargeFinanciere = new ChargeFinanciere();
listetaxes: Taxe[] = [];
taxe: Taxe = new Taxe();
idTaxe!: number;
  utaxe: Taxe = new Taxe();
  idCharge!: number;
  uCharge: ChargeFinanciere = new ChargeFinanciere();
constructor( private toastr: ToastrService, private route: ActivatedRoute,
  private router: Router, private chargeService:ChargeFinanciereServiceService, private taxeService:TaxeServiceService) { }
  saveTaxe(){
    this.taxeService.AddTaxe(this.taxe).subscribe(
      data => {alert('add success'); location.reload();},
      error => {alert("add echoué")}
    );
    }
    onclickupdatetaxe(taxe:any){
      this.idTaxe = taxe.idTaxe;
      this.taxe= taxe;

    }
    onclickupdateCharge(charge:any){
      this.charge = charge.idCharge;
      this.charge= charge;

    }
  deleteTaxe(id: number){
    if (window.confirm('Confirmer la supression'+id)){
      this.taxeService.DeleteTaxe(id).subscribe(
        data => {alert("suppresion avec succès");location.reload(); },
        error => {alert('suppression erronée');console.log(error);}
      );
    }
  }

  saveCharge(){
    this.chargeService.AddChargeFinanciere(this.charge).subscribe(
      data => {alert('add success'); location.reload();
      this.toastr.success('Charge Ajouter avec succes!', 'Notification');},
      error => {alert("add echoué")}
    );
    }

  deleteCharge(id: number){
    if (window.confirm('Confirmer la supression'+id)){
      this.chargeService.DeleteChargeFinanciere(id).subscribe(
        data => {alert("suppresion avec succès");location.reload(); },
        error => {alert('suppression erronée');console.log(error);}
      );
    }
  }
  ngOnInit(): void {


    this.taxeService.getAllTaxe().subscribe(
      data => {this.listetaxes = data},
      error => {'Error de recuperation les utilisateurs !'}
    );
    this.chargeService.getAllChargeFinanciere().subscribe(
      data => {this.listecharge = data},
      error => {'Error de recuperation les utilisateurs !'}
    );


  }

  updateTaxe(){
    this.taxeService.updateTaxe(this.taxe).subscribe( data =>{
      location.reload();;
    }
    , error => console.log(error));
  }
  updateCharge(){
    this.chargeService.updateChargeFinanciere(this.charge).subscribe( data =>{
      location.reload();;
    }
    , error => console.log(error));
  }


  openModal(){
    $('#exampleModal').modal('show');
  }


}
