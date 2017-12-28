import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../service/funcionario.service';
import { FuncionarioDTO } from '../dto/FuncionarioDTO';

@Component({
  selector: 'app-content-funcionario',
  templateUrl: './content-funcionario.component.html',
  styleUrls: ['./content-funcionario.component.css']
})
export class ContentFuncionarioComponent implements OnInit {

  funcionarios : FuncionarioDTO[];

  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit() {
    this.carregarFuncionarios();
  }

  carregarFuncionarios(){
      this.funcionarioService.queryAll().subscribe(response => {
        this.funcionarios = response;
      })
  }

}
