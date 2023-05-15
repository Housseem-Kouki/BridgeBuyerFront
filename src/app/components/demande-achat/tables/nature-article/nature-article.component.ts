import { Component, OnInit } from "@angular/core";
import { DialogService } from "@ngneat/dialog";
import { Observable, takeUntil, map } from "rxjs";
import { NatureArticleService } from "src/app/services/nature-article.service";
import { Unsub } from "src/app/utils/unsub";
import { AddNatureArticleComponent } from "../../add-nature-article/add-nature-article.component";
import { Article } from "src/app/utils/interfaces/article.interface";

@Component({
  selector: "app-nature-article",
  templateUrl: "./nature-article.component.html",
  styleUrls: ["./nature-article.component.scss"],
})
export class NatureArticleComponent extends Unsub implements OnInit {
  articles$!: Observable<any[]>;
  selectedArticle: Article | null = null;
  constructor(
    private natureService: NatureArticleService,
    private dialog: DialogService
  ) {
    super();
  }

  toggleComments(article: Article): void {
    if (this.selectedArticle === article) {
      // If the selected article is already open, close it
      this.selectedArticle = null;
    } else {
      this.selectedArticle = article;
    }
  }

  getAllNatureArticle() {
    this.articles$ = this.natureService.getAllNatureArticle().pipe(
      takeUntil(this.unsubscribe$),
      map((response: any) => response)
    );
  }

  deleteNature(id: number) {
    if (window.confirm("Vous êtes sûr ?")) {
      this.natureService.deleteNatureArticle(id).subscribe({
        complete: () => {
          this.getAllNatureArticle();
        },
      });
    }
  }

  addNatureArticle() {
    const dialogRef = this.dialog.open(AddNatureArticleComponent);
    dialogRef.afterClosed$.subscribe({
      next: (res: any) => {
        res && this.getAllNatureArticle();
      },
    });
  }

  updateNatureArticle(natureArticle: any) {
    const dialogRef = this.dialog.open(AddNatureArticleComponent, {
      data: natureArticle,
    });
    dialogRef.afterClosed$.subscribe({
      next: (res: any) => {
        res && this.getAllNatureArticle();
      },
    });
  }

  openModal() {}
  ngOnInit(): void {
    this.getAllNatureArticle();
  }
}
