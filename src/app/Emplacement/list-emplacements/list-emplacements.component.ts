import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EmplacementService } from "src/app/emplacement.service";

@Component({
  selector: "app-list-emplacements",
  templateUrl: "./list-emplacements.component.html",
  styleUrls: ["./list-emplacements.component.scss"],
})
export class ListEmplacementsComponent implements OnInit {
  emplacements: any;
  id: any;
  searchTerm: any;
  p: any;
  constructor(
    private emplService: EmplacementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllEmplacements();
  }
  getAllEmplacements() {
    this.emplService
      .getAllEmplacements()
      .subscribe((data) => (this.emplacements = data));
  }
  deleteEmplacement(id: any) {
    this.emplService.deleteEmplacement(id).subscribe((data) => {
      console.log(data);
      this.getAllEmplacements;
    });
  }
  trieListEmplacement() {
    this.router.navigate(["ListEmplacementTriee"]);
  }
  createEmplacement() {
    this.router.navigate(["addEmplacement"]);
  }
  search(term: string) {
    if (term != "") {
    } else if (term == "") {
      this.getAllEmplacements();
    }
    this.emplacements = this.emplacements.filter((item) =>
      Object.values(item).join(" ").toLowerCase().includes(term.toLowerCase())
    );
  }
}
