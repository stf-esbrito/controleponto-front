import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { ModuleWithProviders } from "@angular/core/";
import { ContentFuncionarioComponent } from './content-funcionario/content-funcionario.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'funcionarios', component: ContentFuncionarioComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);