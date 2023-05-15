import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdresseExpedition } from "src/app/adresse-expedition";
import { EmplacementService } from "src/app/emplacement.service";

@Component({
  selector: "app-create-adresse-exped",
  templateUrl: "./create-adresse-exped.component.html",
  styleUrls: ["./create-adresse-exped.component.scss"],
})
export class CreateAdresseExpedComponent implements OnInit {
  adresseExped: AdresseExpedition = new AdresseExpedition();
  constructor(
    private emplService: EmplacementService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  saveAdresseExped() {
    this.emplService.addAdressExpedition(this.adresseExped).subscribe(
      (data) => {
        console.log(data);
        this.goToAllAd();
      },
      (error) => console.log(error)
    );
  }
  goToAllAd() {
    this.router.navigate(["/AllAdresses"]);
  }
  onSubmit() {
    console.log(this.adresseExped);
    this.saveAdresseExped();
  }
}
