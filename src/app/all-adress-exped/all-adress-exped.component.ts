import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EmplacementService } from "../emplacement.service";

@Component({
  selector: "app-all-adress-exped",
  templateUrl: "./all-adress-exped.component.html",
  styleUrls: ["./all-adress-exped.component.scss"],
})
export class AllAdressExpedComponent implements OnInit {
  adressesExped: any;
  id: any;

  constructor(
    private emplService: EmplacementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllAdresses();
  }
  getAllAdresses() {
    this.emplService
      .getAlladdExp()
      .subscribe((data) => (this.adressesExped = data));
  }

  createAdresseExped() {
    this.router.navigate(["addAdresse"]);
  }
}
