import { Component, OnInit } from '@angular/core';
import { PontoDTO } from '../dto/PontoDTO';
import { PontoService } from '../service/ponto.service';
import { Broadcaster } from '../core/broadcaster';
import { Http } from '@angular/http/';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pontos : PontoDTO[];
  ponto : PontoDTO;
  filter: any;
  constructor(private pontoService : PontoService, private broadcaster : Broadcaster, private router: Router) {
    this.broadcaster.on<PontoDTO[]>("pesquisa_ponto").subscribe(response => {
       this.pontos = response;
    });
  }

  ngOnInit() {
    this.carregarPontos();
  }

  carregarPontos() : void {
    this.pontoService.buscarPontosSemSaida(this.filter).subscribe( response => {
      this.pontos = response;
    });
  }

  deletar(id: number) : void {
    console.log(id);
    this.pontoService.delete(id).subscribe(response =>{ 
        window.location.reload();
    });
  }
  editar(id : string) : void {
    this.pontoService.get(id).subscribe(response =>{
      console.log(response);
      this.broadcaster.broadcast("fill-field-edit", response);
    });
  }

}
