import { Injectable } from '@angular/core';
import { AbstractHttpService } from './abstract-http.service';
import { FuncionarioDTO } from '../dto/FuncionarioDTO';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FuncionarioService extends AbstractHttpService<FuncionarioDTO>{

  constructor(http : Http) { 
    super('funcionarios', http);
  }
  
  salvar(funcionario : FuncionarioDTO) : Observable<any> {
    return this.post(funcionario);
  }

  buscar(filter : string) : Observable<any> {
    return this.queryAll(filter);
  }
}
