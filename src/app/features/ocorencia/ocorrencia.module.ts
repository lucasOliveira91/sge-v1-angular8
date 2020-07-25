import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { EmployeesRoutingModule } from 'src/app/features/ocorencia/ocorrencia.routing';
import { OcorrenciasListaComponent } from 'src/app/features/ocorencia/ocorrencia-lista/ocorrencia.component';
import { OcorrenciaDetalheComponent } from './ocorrencia-detalhe/ocorrencia-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    OcorrenciasListaComponent,
    OcorrenciaDetalheComponent
  ]
})
export class EmployeesModule { }