import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ComplaintsService } from "src/app/complaints.service";

@Component({
  selector: "app-complaint-list",
  templateUrl: "./complaint-list.component.html",
  styleUrls: ["./complaint-list.component.scss"],
})
export class ComplaintListComponent implements OnInit {
  complaints: any;
  id: any;
  idU = 1;
  nbreTotal: any;
  constructor(
    private complaintServ: ComplaintsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllComplaints();
  }
  getAllComplaints() {
    this.complaintServ.getAll().subscribe((data) => (this.complaints = data));
  }
  deleteComplaint(id: any) {
    this.complaintServ.delete(id).subscribe((data) => {
      console.log(data);
      this.getAllComplaints;
    });
  }
  viewComplaint(id: any) {
    this.router.navigate(["viewComplaint", id]);
  }
  updateComplaint(id: any) {
    this.router.navigate(["updateComplaint", id]);
  }
  getNumbrComplaints() {
    this.complaintServ.getNbrTotal().subscribe(
      (data) => {
        this.nbreTotal = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  createComplaint() {
    this.router.navigate(["addComplaint", this.idU]);
  }
}
