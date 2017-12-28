import { Component, OnInit } from '@angular/core';
import { PontoDTO } from '../dto/PontoDTO';
import { PontoService } from '../service/ponto.service';
import { Broadcaster } from '../core/broadcaster';
declare var $: any;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pontos : PontoDTO[];
  ponto : PontoDTO;
  constructor(private pontoService : PontoService, private broadcaster : Broadcaster) {
    this.broadcaster.on<PontoDTO[]>("pesquisa_ponto").subscribe(response => {
       this.pontos = response;
    });
  }

  ngOnInit() {
    this.carregarPontos();
  }

  carregarPontos() : void {
    this.pontoService.queryAll().subscribe(pontos => {
      this.pontos = pontos;
    });
  }

  deletar(id: number) : void {
    console.log(id);
    this.pontoService.delete(id).subscribe(response =>{ 
        location.reload();
    });
  }
  editar(id : string) : void {
    this.pontoService.get(id).subscribe(response =>{
      console.log(response);
      this.broadcaster.broadcast("fill-field-edit", response);
    });
  }

}
