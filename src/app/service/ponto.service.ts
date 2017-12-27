import { Injectable } from '@angular/core';
import { AbstractHttpService } from './abstract-http.service';
import { PontoDTO } from '../dto/PontoDTO';
import { Http } from '@angular/http';

@Injectable()
export class PontoService extends AbstractHttpService<PontoDTO> {

  constructor(http : Http) { 
    super('', http);
  }

}
