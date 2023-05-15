import { AppeloffreService } from 'src/app/core/services/appeloffre.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appeloffre-av',
  templateUrl: './appeloffre-av.component.html',
  styleUrls: ['./appeloffre-av.component.scss']
})
export class AppeloffreAvComponent implements OnInit {

  id1: number;
  idA: number;
  pourcentageRemise: number;
  Ptotal: number;
  constructor(private appeloffreService:AppeloffreService, private router:Router,) { }

  ngOnInit(): void {
  }
  calculerRemise() {
    this.appeloffreService.calculerRemise(this.id1, this.idA, this.pourcentageRemise)
      .subscribe(Ptotal => this.Ptotal = Ptotal);
  }

}
