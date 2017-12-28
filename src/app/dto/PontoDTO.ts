import { FuncionarioDTO } from "./FuncionarioDTO";

export class PontoDTO{
    id : number
    entrada : Date
    saida : Date
    funcionario : FuncionarioDTO = new FuncionarioDTO();
}