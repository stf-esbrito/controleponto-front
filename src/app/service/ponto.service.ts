import { Injectable } from '@angular/core';
import { AbstractHttpService } from './abstract-http.service';
import { PontoDTO } from '../dto/PontoDTO';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PontoService extends AbstractHttpService<PontoDTO> {

  constructor(http : Http) { 
    super('ponto', http);
  }

  buscar(filter : any) : Observable<any> {
    return this.queryAll(filter);
  }
}
