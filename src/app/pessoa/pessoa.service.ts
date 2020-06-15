import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }
  getPessoa() : Observable<any>
  {
    return this.http.get('http://localhost:5003/api/pessoas/1/100');
  }
}
