import { NgModule } from "@angular/core";
import { BaterPontoComponent } from "./bater-ponto.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser/";

@NgModule({
    imports:[
        FormsModule,
        BrowserModule
    ],
    declarations:[
        BaterPontoComponent
    ],
    exports:[
        BaterPontoComponent
    ]
})
export class BaterPontoModule {}