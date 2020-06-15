import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor(private http: HttpClient) { }
  getRecurso() : Observable<any>
  {
    return this.http.get('http://localhost:5003/api/recursos/1/100');
  }
}