import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NatureArticleService } from "src/app/services/nature-article.service";
import { DialogRef } from "@ngneat/dialog";
import { DemandeachatServiceService } from "src/app/services/demandeachat-service.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.scss"],
})
export class AddArticleComponent implements OnInit {
  form: FormGroup;
  defailtNature: string = "";
  natureArticles: any[] = [];
  selectedNature: string = "";
  unites: any[] = [];

  constructor(
    private fb: FormBuilder,
    private demandeService: DemandeachatServiceService,
    private naService: NatureArticleService,
    private dialog: DialogRef<AddArticleComponent>,
    public toast: ToastrService
  ) {}

  getAllNatureArticle() {
    this.naService.getAllNatureArticle().subscribe({
      next: (res: any) => {
        this.natureArticles = res;
      },
    });
  }

  getAllUnites() {
    this.naService.getAllUnite().subscribe({
      next: (res: any) => {
        this.unites = res;
      },
    });
  }

  ngOnInit(): void {
    this.getAllUnites();
    this.getAllNatureArticle();
    this.form = this.fb.group({
      nomarticle: ["", Validators.required],
      descriptionarticle: ["", Validators.required],
      prixestime: [null, Validators.required],
      quantite: [null, Validators.required],
      idunitearticle: [null, Validators.required],
      idnaturearticle: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.demandeService.createArticle(this.form.value).subscribe({
      next: (res: any) => {
        this.dialog.close(res);
        this.toast.success("l'article a été ajouté avec succès");
      },
    });
  }
}
