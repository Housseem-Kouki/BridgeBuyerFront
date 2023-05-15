import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogRef, DialogService } from "@ngneat/dialog";
import { ArticleService } from "src/app/services/article.service";
import { DemandeachatServiceService } from "src/app/services/demandeachat-service.service";
import { Article } from "src/app/utils/interfaces/article.interface";
import { PartialDemandeAchat } from "src/app/utils/interfaces/demande.interface";
import { AddArticleComponent } from "../add-article/add-article.component";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-update-demande",
  templateUrl: "./update-demande.component.html",
  styleUrls: ["./update-demande.component.scss"],
})
export class UpdateDemandeComponent implements OnInit {
  form: FormGroup;
  articles: any = [];
  demande: PartialDemandeAchat;
  selectedArticles: Article[] = [];
  constructor(
    private fb: FormBuilder,
    private dialog: DialogRef<UpdateDemandeComponent>,
    private dialog2: DialogService,
    private articleService: ArticleService,
    private demandeService: DemandeachatServiceService,
    private toast: ToastrService
  ) {
    this.demande = { ...this.dialog.data } as Partial<PartialDemandeAchat>;
    this.selectedArticles = this.demande?.articles;
  }

  createForm() {
    this.form = this.fb.group({
      etatdemandeachat: [
        this.demande?.etatdemandeachat || 0,
        Validators.required,
      ],
      budget: [this.demande?.budget || 0, Validators.required],
    });
  }

  getAllArticles() {
    this.articleService.getAllArticles().subscribe({
      next: (res: any) => {
        this.articles = res;
      },
    });
  }

  addArticle() {
    const dialogRef = this.dialog2.open(AddArticleComponent);
    dialogRef.afterClosed$.subscribe({
      next: (res: any) => {
        if (res) {
          this.getAllArticles();
          this.selectedArticles.push(res);
        }
      },
    });
  }

  toggleArticleSelection(article: Article, checked: boolean): void {
    if (checked) {
      this.selectedArticles.push(article);
    } else {
      this.selectedArticles = this.selectedArticles.filter(
        (selectedArticle) => selectedArticle.idarticle !== article.idarticle
      );
    }
  }
  isSelected(article: Article): boolean {
    return this.selectedArticles.some(
      (selectedArticle) => selectedArticle.idarticle === article.idarticle
    );
  }

  onSubmit() {
    const formData = {
      ...this.form.value,
      iddemandeachat: this.demande?.iddemandeachat,
      articles: this.selectedArticles.map((a) => {
        return { idarticle: a.idarticle };
      }),
      acheteur: this.demande?.acheteur,
    };

    this.demandeService.updateDemande(formData).subscribe({
      complete: () => {
        this.toast.success("La demande d'achat a été mise à jour avec succès");
        this.dialog.close(true);
      },
    });
  }

  ngOnInit(): void {
    this.createForm();

    this.getAllArticles();
  }
}
