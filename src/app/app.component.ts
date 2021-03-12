import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { requireCheckboxesToBeCheckedValidator } from "./custom-validator";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  openPdf = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      acceptTerms: [
        false,
        Validators.requiredTrue,
        requireCheckboxesToBeCheckedValidator(this.openPdf)
      ]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // display form values on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.form.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}
