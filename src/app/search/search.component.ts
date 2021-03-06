import { Component } from "@angular/core";
import { FuncionarioService } from "../service/funcionario.service";
import { Observable } from "rxjs/Observable";
import { Broadcaster } from "../core/broadcaster";
import { PontoService } from "../service/ponto.service";

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    filter: any;
    constructor(private pontoService: PontoService, private broadcaster: Broadcaster) {
        this.filter = {
            nome : ""
        };
     }

    ngOnInit(){
    }

    buscar() : void{
        this.filter.nome = this.filter.nome.trim();
        this.pontoService.buscarPontosSemSaida(this.filter).subscribe(
            response => {
                this.broadcaster.broadcast("pesquisa_ponto", response);
            }
        );
    }
}