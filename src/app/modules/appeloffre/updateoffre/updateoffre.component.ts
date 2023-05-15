import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { Offre } from 'src/app/core/Model/offre';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-updateoffre',
  templateUrl: './updateoffre.component.html',
  styleUrls: ['./updateoffre.component.scss']
})
export class UpdateoffreComponent implements OnInit {

 offre:Offre;

  constructor(private appeloffreservice:AppeloffreService , private router:Router) { }

  ngOnInit(): void {

    this.appeloffreservice.getAllOffre();

  }

  updateOffre(){
    this.appeloffreservice.updateOffre(this.offre)
    .subscribe(()=>console.log('complete'));
    this.router.navigate(['/offre/Offre/list']);
  }
}
