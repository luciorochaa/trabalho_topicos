import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa.interface';
import { Observable, empty } from 'rxjs';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})

export class PessoaListaComponent implements OnInit {


  pessoas: Observable<Pessoa>;
  alertService: any;

  constructor(private servico: PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.servico.getPessoa();
  }

  apagar(id: number): void {
    this.servico.deletePessoa(id).subscribe(
      ata => {
        this.ngOnInit();
      },
      error => {
        alert('ERRO');
      }
    );

  }




  /*success => {
          //this.onRefresh();
        },
        error=> this.alertService.showAlertDanger('Erro ao remover. Tente novamente')
      );*/


  /*  handleError() {
      this.alertService.showAlertDanger('Erro ao carregar pessoas. Tente novamente')
    }*/

}

