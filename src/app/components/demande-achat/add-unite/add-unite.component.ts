import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogRef } from "@ngneat/dialog";
import { DemandeachatServiceService } from "src/app/services/demandeachat-service.service";
import { UniteArticleService } from "src/app/services/unite-article.service";

@Component({
  selector: "app-add-unite",
  templateUrl: "./add-unite.component.html",
  styleUrls: ["./add-unite.component.scss"],
})
export class AddUniteComponent implements OnInit {
  form: FormGroup;
  unite = null;
  constructor(
    private fb: FormBuilder,
    private dialog: DialogRef<AddUniteComponent>,
    private uniteService: UniteArticleService
  ) {
    this.unite = this.dialog.data;
  }

  onSubmit() {
    if (this.unite) {
      this.uniteService
        .updateUnite({
          ...this.form.value,
          idunitearticle: this.unite.idunitearticle,
        })
        .subscribe({
          complete: () => {
            this.dialog.close(true);
          },
        });
    } else {
      this.uniteService.createUnite(this.form.value).subscribe({
        complete: () => {
          this.dialog.close(true);
        },
      });
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomunite: [this.unite?.nomunite, Validators.required],
    });
  }
}
