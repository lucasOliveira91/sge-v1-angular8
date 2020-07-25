import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OcorrenciasListaComponent } from 'src/app/features/ocorencia/ocorrencia-lista/ocorrencia.component';
import { OcorrenciaDetalheComponent } from './ocorrencia-detalhe/ocorrencia-detalhe.component';

const routes: Routes = [
    {
        path: '',
        component: OcorrenciasListaComponent
    },
    {
        path: 'ocorrencia/:id',
        component: OcorrenciaDetalheComponent
    },
    {
        path: 'ocorrencia',
        component: OcorrenciaDetalheComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }