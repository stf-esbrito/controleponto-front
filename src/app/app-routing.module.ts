import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { ModuleWithProviders } from "@angular/core/";
import { ContentFuncionarioComponent } from './content-funcionario/content-funcionario.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaterPontoComponent } from './bater-ponto/bater-ponto.component';

const routes: Routes = [
    {path: '', component: BaterPontoComponent},
    {path: 'pontos', component: ContentComponent},
    {path: 'funcionarios', component: ContentFuncionarioComponent},
    {path: '**', component: PageNotFoundComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);