import { Injectable } from '@angular/core';
import { AbstractHttpService } from './abstract-http.service';
import { FuncionarioDTO } from '../dto/FuncionarioDTO';
import { Http } from '@angular/http/src/http';

@Injectable()
export class FuncionarioService extends AbstractHttpService<FuncionarioDTO>{

  constructor(http : Http) { 
    super('funcionarios', http);
  }

}
