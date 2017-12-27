import { Component, OnInit } from '@angular/core';
import { PontoDTO } from '../dto/PontoDTO';
import { PontoService } from '../service/ponto.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pontos : PontoDTO[];

  constructor(private pontoService : PontoService) {}

  ngOnInit() {
    this.carregarPontos();
  }

  carregarPontos() : void {
    this.pontoService.queryAll().subscribe(pontos => {
      this.pontos = pontos;
    })
  }

}
