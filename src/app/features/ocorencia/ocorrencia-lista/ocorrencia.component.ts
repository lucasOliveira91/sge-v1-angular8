import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Ocorrencia } from 'src/app/shared/model/Ocorrencia.model';
import { OcorrenciaService } from 'src/app/features/ocorencia/ocorrencia.service';

@Component({
  selector: 'app-ocorrencia-lista',
  templateUrl: 'ocorrencia.component.html',
  styleUrls: ['ocorrencia.component.css']
})
export class OcorrenciasListaComponent implements OnInit {
  columns: any[];

  ocorrencias: Ocorrencia[];

  pageSize: number;

  constructor(
    private routeStateService: RouteStateService,
    private ocorrenciaService: OcorrenciaService) { }

  ngOnInit() {

    this.pageSize = 10;

    this.columns = [
      { field: 'dhOcorrencia', header: 'Data' },
      { field: 'noServidor', header: 'Servidor' },
      { field: 'descTipoOcorrencia', header: 'Tipo Ocorrencia' },
      { field: 'txOcorrencia', header: 'Descrição' },
    ];

     this.ocorrenciaService.get().subscribe(resp => {
       console.log(resp)
      this.ocorrencias = resp;
    });
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }
}
