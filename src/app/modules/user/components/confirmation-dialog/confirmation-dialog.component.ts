import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <div class="modal fade" tabindex="-1" [ngClass]="{show: visibleAnimate}" [ngStyle]="{'display': visibleAnimate ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ message }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="hide()"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="hide()">Annuler</button>
            <button type="button" class="btn btn-danger" (click)="confirm()">Confirmer</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop.show {
      opacity: 0.5;
    }
  `]
})
export class ConfirmationDialogComponent {

  @Output() confirmed = new EventEmitter<boolean>();

  message: string;
  visibleAnimate = false;

  show(message: string): Observable<boolean> {
    this.message = message;
    this.visibleAnimate = true;
    return new Observable<boolean>(observer => {
      this.confirmed.subscribe(confirmed => {
        observer.next(confirmed);
        observer.complete();
      });
    });
  }

  hide() {
    this.visibleAnimate = false;
    this.confirmed.emit(false);
  }

  confirm() {
    this.visibleAnimate = false;
    this.confirmed.emit(true);
  }

}