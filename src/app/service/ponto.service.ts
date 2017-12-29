import { Injectable } from '@angular/core';
import { AbstractHttpService } from './abstract-http.service';
import { PontoDTO } from '../dto/PontoDTO';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PontoService extends AbstractHttpService<PontoDTO> {

  http : Http;
  constructor(http : Http) { 
    super('pontos', http);
    this.http = http;
  }

  buscar(filter : any) : Observable<any> {
    return this.queryAll(filter);
  }

  buscarPontosSemSaida(filter : any) : Observable<any> {
    return this.http.get(`${this.apiUrl}${this.resource}/all?${super.buildQueryParams(filter)}`, this.getCustomOptions())
    .map(response => response.json());
  }
  buscarFuncionariosOk() : Observable<any> {
    return this.http.get(`${this.apiUrl}${this.resource}/allFuncOk`, this.getCustomOptions())
    .map(response => response.json());
  }
 }
