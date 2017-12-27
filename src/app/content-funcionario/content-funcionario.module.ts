import { NgModule } from "@angular/core";
import { ContentFuncionarioComponent } from "./content-funcionario.component";
import { AddNewButtonModule } from "../add-new-button/add-new.module";
import { AddNewModule } from "../add-new/add-new.module";
import { SearchModule } from "../search/search.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PontoService } from "../service/ponto.service";
import { FuncionarioService } from "../service/funcionario.service";

@NgModule({
    imports:[
        HttpModule,
        FormsModule,
        CommonModule,
        SearchModule,
        AddNewModule,
        AddNewButtonModule
    ],
    declarations:[
        ContentFuncionarioComponent
    ],
    exports:[
        ContentFuncionarioComponent
    ],
    providers:[
        PontoService, 
        FuncionarioService
    ]
})
export class ContentFuncionarioModule {}