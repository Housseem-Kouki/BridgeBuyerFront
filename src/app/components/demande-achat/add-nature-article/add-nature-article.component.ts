import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogRef } from "@ngneat/dialog";
import { NatureArticleService } from "src/app/services/nature-article.service";

@Component({
  selector: "app-add-nature-article",
  templateUrl: "./add-nature-article.component.html",
  styleUrls: ["./add-nature-article.component.scss"],
})
export class AddNatureArticleComponent implements OnInit {
  form: FormGroup;
  natureArticle: any = null;

  constructor(
    private fb: FormBuilder,
    private naService: NatureArticleService,
    private dialog: DialogRef<AddNatureArticleComponent>
  ) {
    this.natureArticle = this.dialog.data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomanature: [this.natureArticle?.nomanature || "", Validators.required],
      descriptionnature: [
        this.natureArticle?.descriptionnature || "",
        Validators.required,
      ],
    });
  }

  onSubmit() {
    if (this.natureArticle) {
      this.naService
        .updateNatureArticle({
          ...this.form.value,
          idnaturearticle: this.natureArticle.idnaturearticle,
        })
        .subscribe({
          complete: () => {
            this.dialog.close(true);
          },
        });
    } else {
      this.naService.createNatureArticle(this.form.value).subscribe({
        complete: () => {
          this.dialog.close(true);
        },
      });
    }
  }
}
