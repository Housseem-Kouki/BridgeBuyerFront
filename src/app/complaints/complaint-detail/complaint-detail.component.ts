import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ComplaintsService } from "src/app/complaints.service";
import { Complaints } from "src/app/core/Models/complaints";
@Component({
  selector: "app-complaint-detail",
  templateUrl: "./complaint-detail.component.html",
  styleUrls: ["./complaint-detail.component.scss"],
})
export class ComplaintDetailComponent implements OnInit {
  id: any;
  complaints!: Complaints;
  constructor(
    private complaintServ: ComplaintsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.complaints = new Complaints();
    this.complaintServ.get(this.id).subscribe((data) => {
      this.complaints = data;
    });
  }
  archiverComplaint(id: any) {
    this.complaintServ.archiverComplaint(this.id).subscribe((data) => {
      console.log(data);
      this.getAllComplaints;
    });
  }
  getAllComplaints() {
    this.router.navigate(["listComplaint"]);
  }
}
