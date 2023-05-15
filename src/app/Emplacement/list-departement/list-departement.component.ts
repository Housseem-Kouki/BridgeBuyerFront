import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EmplacementService } from "src/app/emplacement.service";

@Component({
  selector: "app-list-departement",
  templateUrl: "./list-departement.component.html",
  styleUrls: ["./list-departement.component.scss"],
})
export class ListDepartementComponent implements OnInit {
  departements: any;
  searchTerm: any;
  p: any;
  constructor(
    private emplacService: EmplacementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDepartements();
  }
  getAllDepartements() {
    this.emplacService
      .getAllDepartements()
      .subscribe((data) => (this.departements = data));
  }
  search(term: string) {
    if (term != "") {
    } else if (term == "") {
      this.getAllDepartements();
    }
    this.departements = this.departements.filter((item) =>
      Object.values(item).join(" ").toLowerCase().includes(term.toLowerCase())
    );
  }
  viewDepartement(id: any) {
    this.router.navigate(["viewDepartement", id]);
  }
  createDepartement() {
    this.router.navigate(["addDepartement"]);
  }
}
