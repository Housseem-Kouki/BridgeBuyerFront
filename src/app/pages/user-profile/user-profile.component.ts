import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  imgg = {  } as any;
  uploadImage() {
    const userId = localStorage.getItem('idUser');
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: Event) => {
      const file = (event.target as HTMLInputElement).files[0];
    
      const formData = new FormData();
      formData.append('image', file);
      formData.append('userId', userId);
  
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
  
      this.http.post('/USER-SERVICE/upload/' + userId, formData, { headers: headers })
        .subscribe(
          response => {
            alert("sauvegardé !");
            // Logique de gestion de la réponse ici
          },
          error => {
            alert("error !");
            console.log(error)
            // Logique de gestion de l'erreur ici
          }
        );
    };
  
    input.click();
  }
  

}
