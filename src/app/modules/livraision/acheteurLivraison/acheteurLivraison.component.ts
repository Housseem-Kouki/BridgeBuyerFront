import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livraison } from 'src/app/core/Models/Livraison';
import { LivraisonService } from 'src/app/core/services/livraison.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acheteurLivraison',
  templateUrl: './acheteurLivraison.component.html',
  styleUrls: ['./acheteurLivraison.component.scss']
})
export class AcheteurLivraisonComponent implements OnInit {

  livraisons: Livraison[];

  constructor(
    private route: ActivatedRoute,
    private livraisonService: LivraisonService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.livraisonService.getAlllivraisonByuser(id)
      .subscribe(livraisons => this.livraisons = livraisons);
  }
}
