import { Component, OnInit } from "@angular/core";
import { PontoDTO } from "../dto/PontoDTO";
import { Broadcaster } from "../core/broadcaster";
import { PontoService } from "../service/ponto.service";


@Component({
    selector: 'edit-ponto',
    templateUrl: './edit-ponto.component.html',
    styleUrls: ['./edit-ponto.component.css']
})
export class EditPontoComponent implements OnInit{
    ponto : PontoDTO = new PontoDTO();
    constructor(private pontoService : PontoService, private broadcaster : Broadcaster){
        this.broadcaster.on<PontoDTO>("fill-field-edit").subscribe(response => {
            this.ponto = response;
        })
    }
    ngOnInit(){}

    editarPonto() : void {
        this.pontoService.put(this.ponto).subscribe();
    }
}
