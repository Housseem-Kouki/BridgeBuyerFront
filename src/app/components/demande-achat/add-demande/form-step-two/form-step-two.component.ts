import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-step-two",
  templateUrl: "./form-step-two.component.html",
  styleUrls: ["./form-step-two.component.scss"],
})
export class FormStepTwoComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ["", Validators.required],
    });
  }

  onSubmit() {
    console.log("Step 2 submitted", this.form.value);
  }

  nextStep() {
    // Trigger event to go to next step
  }

  previousStep() {
    // Trigger event to go to previous step
  }
}
