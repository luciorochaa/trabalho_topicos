import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {

  constructor(private http: HttpClient) { }
  getAnotacao() : Observable<any>
  {
    return this.http.get('http://localhost:5003/api/anotacoes/1/100');
  }
}