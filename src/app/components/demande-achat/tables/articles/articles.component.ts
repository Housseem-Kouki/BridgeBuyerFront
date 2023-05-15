import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NgbAccordion } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { Observable, map, takeUntil, tap } from "rxjs";
import { ArticleService } from "src/app/services/article.service";
import { Article } from "src/app/utils/interfaces/article.interface";
import { Unsub } from "src/app/utils/unsub";
import { ReactComponent, ReactifyDirective } from "ng-reactify";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"],
})
export class ArticlesComponent extends Unsub implements OnInit {
  articles: Article[] = [];
  selectedArticle: Article | null = null;
  comments: any;
  content = "";

  constructor(
    private articleService: ArticleService,
    private toast: ToastrService,
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient
  ) {
    super();
  }

  toggleAccordion(accordion: NgbAccordion, panelId: string): void {
    accordion.toggle(panelId);
  }

  reactToComment(data: { commentId: number; react: string }, article: any) {
    this.articleService.addReactOnComment(data).subscribe((newReaction) => {
      const comment = article.comments.find(
        (comment) => comment.idComment === data.commentId
      );

      if (comment) {
        if (!comment.reactComment) {
          comment.reactComment = [];
        }
        comment.reactComment.push(newReaction);
      }
    });
  }

  getReactionCount(reactionType: string, reactComments: any[]): number {
    return reactComments.reduce((count, reactComment) => {
      if (reactComment.react === reactionType) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  toggleComments(article: Article): void {
    if (this.selectedArticle === article) {
      // If the selected article is already open, close it
      this.selectedArticle = null;
    } else {
      this.selectedArticle = article;
    }
  }

  getAllArticles() {
    this.articleService.getAllArticles().subscribe((articles: any) => {
      this.articles = articles;
    });
  }

  deleteComment(commentId: number) {
    if (window.confirm("êtes-vous sûr")) {
      this.articleService.deleteComment(commentId).subscribe({
        complete: () => {
          this.getAllArticles();
        },
      });
    }
  }
  SearchMultiple(key:string): void
{
  if (key=='') {
    this.getAllArticles()
  }
  else if (key!=null)
  {
    this.articleService.SerachMultiple(key).subscribe(
      (data:Article[]) => {
        this.articles =data
      }
    );
  }

}
exportToPdf() {
  this.articleService.exportToPdf().subscribe();
}
exportArticles() {
  this.http.get('/DEMANDEACHAT-SERVICE/export/articles', { responseType: 'blob' })
  .subscribe(res => {
    const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'articles.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}
  //comments
  addComment(articleId: number) {
    const newComment = {
      content: this.content,
      id: articleId,
    };

    this.articleService.addComment(newComment).subscribe((addedComment) => {
      // Find the article with the given articleId
      const article = this.articles.find(
        (article) => article.idarticle === articleId
      );

      if (article) {
        // Add the new comment to the article's comments array
        article.comments = [...article.comments, addedComment];
      }

      // Clear the content after adding the comment
      this.content = "";
    });
  }

  ngOnInit(): void {
    this.getAllArticles();
  }
}
