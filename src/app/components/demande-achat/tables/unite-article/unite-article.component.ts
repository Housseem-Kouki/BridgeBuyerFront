import { Component, OnInit } from "@angular/core";
import { UniteArticleService } from "src/app/services/unite-article.service";
import { Unsub } from "src/app/utils/unsub";
import { Observable, Subscription, map, takeUntil, tap } from "rxjs";
import { AddUniteComponent } from "../../add-unite/add-unite.component";
import { DialogService } from "@ngneat/dialog";
import { Unite } from "src/app/utils/interfaces/unite.interface";

@Component({
  selector: "app-unite-article",
  templateUrl: "./unite-article.component.html",
  styleUrls: ["./unite-article.component.scss"],
})
export class UniteArticleComponent extends Unsub implements OnInit {
  unites$!: Observable<Unite[]>;

  constructor(
    private uniteService: UniteArticleService,
    private dialog: DialogService
  ) {
    super();
  }

  getAllUnites() {
    this.unites$ = this.uniteService.getAllUnite().pipe(
      takeUntil(this.unsubscribe$),
      map((response: any) => response)
    );
  }

  deleteUnite(id: number) {
    if (window.confirm("Vous êtes sûr ?")) {
      this.uniteService.deleteUnite(id).subscribe({
        complete: () => {
          this.getAllUnites();
        },
      });
    }
  }

  addUnite() {
    const dialogRef = this.dialog.open(AddUniteComponent);
    dialogRef.afterClosed$.subscribe({
      next: (res: any) => {
        res && this.getAllUnites();
      },
    });
  }

  updateUnite(unite: Unite) {
    const dialogRef = this.dialog.open(AddUniteComponent, {
      data: unite,
    });
    dialogRef.afterClosed$.subscribe({
      next: (res: any) => {
        res && this.getAllUnites();
      },
    });
  }

  ngOnInit(): void {
    this.getAllUnites();
  }
}
