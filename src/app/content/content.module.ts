import { NgModule } from "@angular/core";
import { ContentComponent } from "./content.component";
import { PontoService } from "../service/ponto.service";
import { FuncionarioService } from "../service/funcionario.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SearchModule } from "../search/search.module";
import { SearchComponent } from "../search/search.component";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        SearchModule
    ],
    declarations:[
        ContentComponent,
    ],
    providers: [
        PontoService, 
        FuncionarioService
    ],
    exports:[
        ContentComponent
    ]
})
export class ContentModule {}