import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Departement } from "src/app/departement";
import { EmplacementService } from "src/app/emplacement.service";

@Component({
  selector: "app-create-departement",
  templateUrl: "./create-departement.component.html",
  styleUrls: ["./create-departement.component.scss"],
})
export class CreateDepartementComponent implements OnInit {
  departement: Departement = new Departement();
  idE: any;
  emplacements: any;
  submitted = false;
  file: any;
  constructor(
    private emplService: EmplacementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emplService.getAllEmplacements().subscribe(
      (data) => {
        this.emplacements = data;
      },
      (error) => console.log(error)
    );
  }
  saveDepartement() {
    this.emplService.addDepartement(this.departement, this.idE).subscribe(
      (data) => {
        console.log(data);
        this.goToDepartements();
      },
      (error) => console.log(error)
    );
  }
  onFileSelected(event: any, id: number) {
    this.file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.file);
    fileReader.onload = () => {
      let data = {
        fileName: this.file.name,
        fileType: this.file.type,
        data: this.file,
      };

      this.departement.data = String(fileReader.result).replace(
        "data:" + this.file.type + ";base64,",
        ""
      );
      this.departement.fileType = this.file.type;
      this.departement.fileName = this.file.name;

      console.log(this.departement);
    };
  }
  goToDepartements() {
    this.router.navigate(["/getAllDepartements"]);
  }
  onSubmit() {
    console.log(this.departement);
    this.saveDepartement();
  }
}
