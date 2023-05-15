import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-step-one",
  templateUrl: "./form-step-one.component.html",
  styleUrls: ["./form-step-one.component.scss"],
})
export class FormStepOneComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
    });
  }

  onSubmit() {
    console.log("Step 1 submitted", this.form.value);
  }

  nextStep() {
    // Trigger event to go to next step
  }
}
