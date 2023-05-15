import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "@ngneat/dialog";
import { DemandeachatServiceService } from "src/app/services/demandeachat-service.service";
import { AddArticleComponent } from "../add-article/add-article.component";
import { Article } from "src/app/utils/interfaces/article.interface";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-demande",
  templateUrl: "./add-demande.component.html",
  styleUrls: ["./add-demande.component.scss"],
})
export class AddDemandeComponent implements OnInit {
  currentStep = 1;
  totalSteps = 3;
  form: FormGroup;
  articles: any[] = [];

  constructor(
    private fb: FormBuilder,
    private demandeService: DemandeachatServiceService,
    private dialog: DialogService,
    public toast: ToastrService,
    private router: Router
  ) {}

  selectedArticles: Article[] = [];

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

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  createForm() {
    this.form = this.fb.group({
      etatdemandeachat: [null, Validators.required],
      budget: [null, Validators.required],
    });
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  getAllArticle() {
    this.demandeService.getAllArticle().subscribe({
      next: (res: any) => {
        this.articles = res;
      },
    });
  }

  addArticle() {
    const dialogRef = this.dialog.open(AddArticleComponent);
    dialogRef.afterClosed$.subscribe({
      next: (res: any) => {
        if (res) {
          this.getAllArticle();

          this.selectedArticles.push(res);
        }
      },
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,
        articles: this.selectedArticles.map((a) => {
          return { idarticle: a.idarticle };
        }),
/*
        acheteur: {
          idUser: 1,
          email: "khater@gmail.com",
          enabled: true,
          role: {
            idRole: 1,
            roleName: "Admin",
            etatrole: true,
            privileges: [],
          },
          emplacement: null,
          complaints: [],
          password: "12345678",
          lname: "khater",
          fname: "khater",
        },*/
      };
console.log(formData)
      this.demandeService.createDemande(formData).subscribe({
        complete: () => {
          this.toast.success("Demande d'achat a été ajoutée avec succès");
          this.router.navigate(["/demande-achat"]);
        },
      });
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.getAllArticle();
  }
}
