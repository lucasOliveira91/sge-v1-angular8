import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Ocorrencia } from 'src/app/shared/model/Ocorrencia.model';
import { OcorrenciaService } from 'src/app/features/ocorencia/ocorrencia.service';
import { ConfirmationService } from 'primeng';
import { NotificationService } from 'src/app/core/services/notification.service';

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
    private ocorrenciaService: OcorrenciaService,
    private confirmationService: ConfirmationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {

    this.pageSize = 10;

    this.columns = [
      { field: 'noServidor', header: 'Servidor' },
      { field: 'noTipoOcorrencia', header: 'Tipo Ocorrencia' },
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

  confirmaExclusao(ocorrencia) {
    this.confirmationService.confirm({
      message: 'Confirma a exclusão desta ocorrência?',
      accept: () => {
        this.ocorrenciaService.delete(ocorrencia).subscribe(resp => {
          this.notificationService.notify('Ocorrência removida com sucesso.');
        });
      }
    });
  }
}
