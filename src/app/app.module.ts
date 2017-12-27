import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { PontoService } from './service/ponto.service';
import { FuncionarioService } from './service/funcionario.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  providers: [PontoService, FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
