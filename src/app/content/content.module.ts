import { NgModule } from "@angular/core";
import { ContentComponent } from "./content.component";
import { PontoService } from "../service/ponto.service";
import { FuncionarioService } from "../service/funcionario.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SearchModule } from "../search/search.module";
import { SearchComponent } from "../search/search.component";
import { AddNewModule } from "../add-new/add-new.module";
import { AddNewButtonModule } from "../add-new-button/add-new.module";
import { Broadcaster } from "../core/broadcaster";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        SearchModule,
        AddNewModule,
        AddNewButtonModule
    ],
    declarations:[
        ContentComponent,
    ],
    providers: [
        PontoService, 
        FuncionarioService,
        Broadcaster
    ],
    exports:[
        ContentComponent
    ]
})
export class ContentModule {}