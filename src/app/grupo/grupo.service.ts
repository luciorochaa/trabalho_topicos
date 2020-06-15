import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }
  getGrupo() : Observable<any>
  {
    return this.http.get('http://localhost:5003/api/grupos/1/100');
  }
}

