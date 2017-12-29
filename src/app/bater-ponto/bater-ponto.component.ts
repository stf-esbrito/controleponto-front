import { Component, OnInit } from "@angular/core";
import { FuncionarioDTO } from "../dto/FuncionarioDTO";
import { FuncionarioService } from "../service/funcionario.service";
import { PontoDTO } from "../dto/PontoDTO";
import { PontoService } from "../service/ponto.service";
import { Observable } from "rxjs/Observable";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";


@Component({
    selector: 'bater-ponto',
    templateUrl: './bater-ponto.component.html',
    styleUrls: ['./bater-ponto.component.css']
})
export class BaterPontoComponent implements OnInit {

    funcionarios : FuncionarioDTO[];
    ponto : PontoDTO = new PontoDTO;

    constructor(private funcionarioService : FuncionarioService, private pontoService : PontoService, private router : Router){
        this.buscarFuncionarios();
    }
    ngOnInit(){

    }

    buscarFuncionarios() : void {
        this.pontoService.buscarFuncionariosOk().subscribe(response => {
            this.funcionarios = response;
        })

    }

    baterPonto() : void {
        this.ponto.entrada = new Date().getTime();
        this.pontoService.post(this.ponto).subscribe();
        this.router.navigateByUrl('pontos');
    }
}