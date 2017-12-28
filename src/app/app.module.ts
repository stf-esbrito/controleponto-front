import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PontoService } from './service/ponto.service';
import { FuncionarioService } from './service/funcionario.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SearchModule } from './search/search.module';
import { ContentModule } from './content/content.module';
import { AddNewModule } from './add-new/add-new.module';
import { ContentFuncionarioComponent } from './content-funcionario/content-funcionario.component';
import { ContentFuncionarioModule } from './content-funcionario/content-funcionario.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { BaterPontoModule } from './bater-ponto/bater-ponto.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    SearchModule,
    ContentModule,
    ContentFuncionarioModule,
    RouterModule,
    PageNotFoundModule,
    BaterPontoModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
