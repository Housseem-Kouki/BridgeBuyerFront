import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BonReception } from 'src/app/core/Models/BonReception';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-acheteurBonReception',
  templateUrl: './acheteurBonReception.component.html',
  styleUrls: ['./acheteurBonReception.component.scss']
})
export class AcheteurBonReceptionComponent implements OnInit {

  bonReceptions: BonReception[] = [];

  constructor(private livraisonService: LivraisonService) {}

  ngOnInit(): void {


    // Get bon receptions by user
    const idUser = 2; // replace with actual user ID
    this.livraisonService.getBonReceptByUser(idUser)
      .subscribe((bonReceptions: BonReception[]) => {
        this.bonReceptions = bonReceptions;
      });
  }
}









