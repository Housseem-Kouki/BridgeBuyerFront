import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { DevisFournisseur } from 'src/app/core/Model/devis-fournisseur';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-creatdevis',
  templateUrl: './creatdevis.component.html',
  styleUrls: ['./creatdevis.component.scss']
})
export class CreatdevisComponent implements OnInit {

  appel:Appeloffre;
  idAppel:any;
  devisfournisseur:DevisFournisseur;
  constructor(private appeloffreservice:AppeloffreService ,private router:Router) { }

  ngOnInit(): void {
  }

 
}
