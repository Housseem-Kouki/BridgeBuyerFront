import { Livraison } from 'src/app/core/Models/Livraison';
import { Component, OnInit } from '@angular/core';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-corbeilleLivraison',
  templateUrl: './corbeilleLivraison.component.html',
  styleUrls: ['./corbeilleLivraison.component.scss']
})
export class CorbeilleLivraisonComponent implements OnInit {
  livraisons: Livraison[];
  constructor(private livraisonService: LivraisonService) { }

  ngOnInit() {
    this.getLivraisons();

  }
  private getLivraisons(){
    this.livraisonService.getAllLivraison().subscribe((data) => {
  this.livraisons = data;
  console.log(data);
},
(error)=>{
  console.log(error);

}
);

}

restoreLivraison(idLivraison: number) {
  this.livraisonService.restoreLivraison(idLivraison)
    .subscribe(
      () =>
      console.log('Livraison restored successfully.'),
      (error) => console.error('Error restoring Livraison:', error)
    );
    location.reload();

}

}
