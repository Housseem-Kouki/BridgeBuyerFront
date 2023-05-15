import { Component, OnInit } from "@angular/core";
import { DemandeachatServiceService } from "src/app/services/demandeachat-service.service";
import { DialogService } from "@ngneat/dialog";
import { Article } from "src/app/utils/interfaces/article.interface";
import { UpdateDemandeComponent } from "src/app/components/demande-achat/update-demande/update-demande.component";
import { ToastrService } from "ngx-toastr";
import { DemandeAchat } from "src/app/utils/interfaces/demande.interface";

@Component({
  selector: "app-demande-achat",
  templateUrl: "./demande-achat.component.html",
  styleUrls: ["./demande-achat.component.scss"],
})
export class DemandeAchatComponent implements OnInit {
  demandes: any[] = [];
  localStorageActiveTabKey = "activeTab";
  active: number = 1;
  selectedArticle: Article | null = null;

  constructor(
    private demandeService: DemandeachatServiceService,
    private dialog: DialogService,
    public toast: ToastrService
  ) {
    this.active =
      JSON.parse(localStorage.getItem(this.localStorageActiveTabKey)) || 1;
  }

  toggleComments(article: Article): void {
    if (this.selectedArticle === article) {
      // If the selected article is already open, close it
      this.selectedArticle = null;
    } else {
      this.selectedArticle = article;
    }
  }

  setActiveTab(index: number) {
    this.active = index;
    localStorage.setItem(this.localStorageActiveTabKey, index.toString());
  }

  updateDemande(demande: DemandeAchat) {
    const dialogRef = this.dialog.open(UpdateDemandeComponent, {
      size: "lg",
      data: demande,
    });

    dialogRef.afterClosed$.subscribe({
      next: (res: any) => {
        res && this.getAllDemandes();
      },
    });
  }

  deleteDemande(id: number) {
    if (window.confirm("Êtes-vous sûr ?")) {
      this.demandeService.deleteDemande(id).subscribe({
        complete: () => {
          this.toast.success("demande a été supprimée");
          this.getAllDemandes();
        },
      });
    }
  }

  getAllDemandes() {
    this.demandeService.getAllDemandes().subscribe({
      next: (res: any) => {
        this.demandes = res;
      },
    });
  }

  ngOnInit(): void {
    this.getAllDemandes();
  }
}
