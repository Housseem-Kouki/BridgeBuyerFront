import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { ComplaintsService } from "src/app/complaints.service";
import { Complaints } from "src/app/core/Models/complaints";

@Component({
  selector: "app-update-complaint",
  templateUrl: "./update-complaint.component.html",
  styleUrls: ["./update-complaint.component.scss"],
})
export class UpdateComplaintComponent implements OnInit {
  id: any;

  complaint: Complaints = new Complaints();
  submitted = false;
  constructor(
    private complaintServ: ComplaintsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.complaintServ.get(this.id).subscribe(
      (data) => {
        this.complaint = data;
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.complaintServ.updateComplaints(this.complaint, this.id).subscribe(
      (data) => {
        this.goToComplaints();
      },
      (error) => console.log(error)
    );
  }
  goToComplaints() {
    this.router.navigate(["listComplaint"]);
  }
}
