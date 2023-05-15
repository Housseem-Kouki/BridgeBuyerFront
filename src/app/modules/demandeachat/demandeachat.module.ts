import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DemandeAchatComponent } from "src/app/pages/demande-achat/demande-achat.component";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { NatureArticleComponent } from "src/app/components/demande-achat/tables/nature-article/nature-article.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddNatureArticleComponent } from "src/app/components/demande-achat/add-nature-article/add-nature-article.component";
import { AddArticleComponent } from "src/app/components/demande-achat/add-article/add-article.component";
import { AddDemandeComponent } from "src/app/components/demande-achat/add-demande/add-demande.component";
import { FormStepOneComponent } from "src/app/components/demande-achat/add-demande/form-step-one/form-step-one.component";
import { FormStepTwoComponent } from "src/app/components/demande-achat/add-demande/form-step-two/form-step-two.component";
import { AddUniteComponent } from "src/app/components/demande-achat/add-unite/add-unite.component";
import { UniteArticleComponent } from "src/app/components/demande-achat/tables/unite-article/unite-article.component";
import { ArticlesComponent } from "src/app/components/demande-achat/tables/articles/articles.component";
import { UpdateDemandeComponent } from "src/app/components/demande-achat/update-demande/update-demande.component";
import { DemandeDetailsComponent } from "src/app/pages/demande-achat/demande-details/demande-details.component";
import { NgxEmojiPickerModule } from "ngx-emoji-picker";


@NgModule({
  declarations: [
    DemandeAchatComponent,
    AddNatureArticleComponent,
    NatureArticleComponent,
    AddArticleComponent,
    AddDemandeComponent,
    FormStepOneComponent,
    AddUniteComponent,
    FormStepTwoComponent,
    UniteArticleComponent,
    ArticlesComponent,
    UpdateDemandeComponent,
    DemandeDetailsComponent,
  ],
  imports: [
    CommonModule,
    NgxEmojiPickerModule.forRoot(),
    RouterModule,
    NgbModule,
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [AddNatureArticleComponent],
})
export class DemandeachatModule {}
