import { Component, OnInit } from '@angular/core';

import { Perfil } from '../perfil.interface';
import { Observable } from 'rxjs';
import { PerfilService } from '../perfil.service'; 

@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  perfis: Observable<Perfil>;

  constructor(private servico: PerfilService) { }

  ngOnInit(): void {
    this.perfis = this.servico.getPerfil();
  }

}