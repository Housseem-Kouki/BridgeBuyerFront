import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-detailsoffre',
  templateUrl: './detailsoffre.component.html',
  styleUrls: ['./detailsoffre.component.scss']
})
export class DetailsoffreComponent implements OnInit {

  constructor(private appeloffreservice:AppeloffreService , private router:Router) { }

  ngOnInit(): void {
  }

}
