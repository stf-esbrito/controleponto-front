import { NgModule } from "@angular/core";
import { EditPontoComponent } from "./edit-ponto.component";
import { PontoService } from "../service/ponto.service";
import { FormsModule } from "@angular/forms";


@NgModule({
    imports:[
        FormsModule
    ],
    declarations:[
        EditPontoComponent
    ],
    exports:[
        EditPontoComponent
    ],
    providers:[
        PontoService
    ]
    
})
export class EditPontoModule {}