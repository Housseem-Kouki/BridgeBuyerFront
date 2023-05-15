import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-updateappel',
  templateUrl: './updateappel.component.html',
  styleUrls: ['./updateappel.component.scss']
})
export class UpdateappelComponent implements OnInit {
  appeloffre:Appeloffre;
idAppeloffre:any;
  constructor(private appeloffreservice:AppeloffreService , private router:Router) { }

  ngOnInit(): void {

    this.appeloffreservice.getAllAppelOffre();
  }
  updateAppelOffre(){
    this.appeloffreservice.updateAppelOffre(this.appeloffre)
    .subscribe(()=> console.log('complete'));
    this.router.navigate(['/appeloffres/Appeloffre/list']);
  }

  export(idAppeloffre:number){
    this.appeloffreservice.export(this.idAppeloffre).subscribe((responseMessage:any)=>{
      const file = new Blob([responseMessage], {
        type:'application/pdf',
      });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }
}
