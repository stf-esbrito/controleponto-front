import { NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { AppComponent } from "../app.component";
import { routing } from "../app-routing.module";
import { FuncionarioService } from "../service/funcionario.service";
import { FormsModule } from "@angular/forms";
import { Broadcaster } from "../core/broadcaster";

@NgModule({
    imports:[
        routing,
        FormsModule
    ],
    declarations:[
        SearchComponent
    ],
    exports: [
        SearchComponent
    ],
    providers:[
        FuncionarioService,
        Broadcaster
    ]
})
export class SearchModule {}