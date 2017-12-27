import { AdminDTO } from "./AdminDTO";

export class FuncionarioDTO {
    id : number
    nome : string
    cpf : string
    createdByAdmin : AdminDTO = new AdminDTO();
}