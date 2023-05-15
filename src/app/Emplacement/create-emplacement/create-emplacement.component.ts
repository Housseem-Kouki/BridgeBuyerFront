import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Emplacement } from "src/app/emplacement";
import { EmplacementService } from "src/app/emplacement.service";

@Component({
  selector: "app-create-emplacement",
  templateUrl: "./create-emplacement.component.html",
  styleUrls: ["./create-emplacement.component.scss"],
})
export class CreateEmplacementComponent implements OnInit {
  emplacement: Emplacement = new Emplacement();
  idA: any;
  adresses: any;
  constructor(
    private emplService: EmplacementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emplService.getAlladdExp().subscribe(
      (data) => {
        this.adresses = data;
      },
      (error) => console.log(error)
    );
  }
  saveEmplacement() {
    this.emplService.addEmplacement(this.emplacement, this.idA).subscribe(
      (data) => {
        console.log(data);
        this.goToAllEmlacements();
      },
      (error) => console.log(error)
    );
  }
  goToAllEmlacements() {
    this.router.navigate(["/ListEmplacement"]);
  }
  onSubmit() {
    console.log(this.emplacement);
    this.saveEmplacement();
  }
}
