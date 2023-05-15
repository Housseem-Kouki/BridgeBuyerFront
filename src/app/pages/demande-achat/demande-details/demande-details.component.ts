import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DemandeachatServiceService } from "src/app/services/demandeachat-service.service";
import { DemandeAchat } from "src/app/utils/interfaces/demande.interface";

@Component({
  selector: "app-demande-details",
  templateUrl: "./demande-details.component.html",
  styleUrls: ["./demande-details.component.scss"],
})
export class DemandeDetailsComponent implements OnInit {
  demande: DemandeAchat;
  id: string = "";
  constructor(
    private demandeService: DemandeachatServiceService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  getDemandeAchatById() {
    this.demandeService.getDemandeAchatById(this.id).subscribe({
      next: (res: any) => {
        this.demande = res;
      },
    });
  }

  ngOnInit(): void {
    this.getDemandeAchatById();
  }
}
