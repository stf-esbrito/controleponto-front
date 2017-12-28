import { FuncionarioDTO } from "./FuncionarioDTO";

export class PontoDTO{
    id : number
    entrada : number
    saida : number
    funcionario : FuncionarioDTO = new FuncionarioDTO();
}