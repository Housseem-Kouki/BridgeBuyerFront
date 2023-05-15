import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ComplaintsService } from "../../complaints.service";
import { Complaints } from "src/app/core/Models/complaints";
@Component({
  selector: "app-create-complaints",
  templateUrl: "./create-complaints.component.html",
  styleUrls: ["./create-complaints.component.css"],
})
export class CreateComplaintsComponent implements OnInit {
  id = 1;
  complaint: Complaints = new Complaints();
  submitted = false;
  constructor(
    private complaintsService: ComplaintsService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  saveComplaint(): void {
    this.complaintsService.addComplaints(this.complaint, this.id).subscribe(
      (data) => {
        console.log(data);
        this.goToComplaints();
      },
      (error) => console.log(error)
    );
  }

  goToComplaints() {
    this.router.navigate(["listComplaint"]);
  }

  onSubmit() {
    console.log(this.complaint);
    this.saveComplaint();
  }
}
