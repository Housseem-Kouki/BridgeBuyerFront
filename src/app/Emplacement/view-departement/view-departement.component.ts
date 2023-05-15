import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Departement } from "src/app/departement";
import { EmplacementService } from "src/app/emplacement.service";

@Component({
  selector: "app-view-departement",
  templateUrl: "./view-departement.component.html",
  styleUrls: ["./view-departement.component.scss"],
})
export class ViewDepartementComponent implements OnInit {
  id: any;
  imgSrc = "";
  departement: Departement = new Departement();
  constructor(
    private emplService: EmplacementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.emplService.getByIdDepartement(this.id).subscribe(
      (data) => {
        console.log(data);
        this.departement = data;
      },
      (error) => console.log(error)
    );
  }
  image(img: any, fileType: any) {
    this.imgSrc = "data:" + fileType + ";base64," + img;
    return this.imgSrc;
  }
}
