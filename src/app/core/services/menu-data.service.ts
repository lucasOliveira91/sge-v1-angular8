import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
                Label: 'Home', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Cadastro', Icon: 'fa-address-book', RouterLink: null, Childs: [
                    { Label: 'Periodo Letivo', RouterLink: null, Childs: null, IsChildVisible: false },
                    {
                        Label: 'Servidores/Prof.', RouterLink: null, IsChildVisible: false, Childs: [
                            {Label: 'Ocorrências', RouterLink: '/main/ocorrencias', Childs: null, IsChildVisible: false},
                            {Label: 'Consulta', RouterLink: '/main/employees', Childs: null, IsChildVisible: false},
                        ]
                    }
                ], IsChildVisible: false
            },
            {
                Label: 'Alunos', Icon: 'fa-users', RouterLink: null, Childs: [
                    { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
                    {
                        Label: 'Menu Level 1.2', RouterLink: null, IsChildVisible: false, Childs: [
                            { Label: 'Menu Level 1.2.1', RouterLink: null, Childs: null, IsChildVisible: false },
                            { Label: 'Menu Level 1.2.2', RouterLink: null, Childs: null, IsChildVisible: false }
                        ]
                    }
                ], IsChildVisible: false
            },
            {
                Label: 'Secretaria', Icon: 'fa-sitemap', RouterLink: null, Childs: [
                    { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
                    {
                        Label: 'Menu Level 1.2', RouterLink: null, IsChildVisible: false, Childs: [
                            { Label: 'Menu Level 1.2.1', RouterLink: null, Childs: null, IsChildVisible: false },
                            { Label: 'Menu Level 1.2.2', RouterLink: null, Childs: null, IsChildVisible: false }
                        ]
                    }
                ], IsChildVisible: false
            },
            {
                Label: 'Relatórios', Icon: 'fa-newspaper', RouterLink: null, Childs: [
                    { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
                    {
                        Label: 'Menu Level 1.2', RouterLink: null, IsChildVisible: false, Childs: [
                            { Label: 'Menu Level 1.2.1', RouterLink: null, Childs: null, IsChildVisible: false },
                            { Label: 'Menu Level 1.2.2', RouterLink: null, Childs: null, IsChildVisible: false }
                        ]
                    }
                ], IsChildVisible: false
            },
            {
                Label: 'Apoio', Icon: 'fa-life-ring', RouterLink: null, Childs: [
                    { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
                    {
                        Label: 'Menu Level 1.2', RouterLink: null, IsChildVisible: false, Childs: [
                            { Label: 'Menu Level 1.2.1', RouterLink: null, Childs: null, IsChildVisible: false },
                            { Label: 'Menu Level 1.2.2', RouterLink: null, Childs: null, IsChildVisible: false }
                        ]
                    }
                ], IsChildVisible: false
            },
            {
                Label: 'Agenda', Icon: 'fa-calendar', RouterLink: null, Childs: [
                    { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
                    {
                        Label: 'Menu Level 1.2', RouterLink: null, IsChildVisible: false, Childs: [
                            { Label: 'Menu Level 1.2.1', RouterLink: null, Childs: null, IsChildVisible: false },
                            { Label: 'Menu Level 1.2.2', RouterLink: null, Childs: null, IsChildVisible: false }
                        ]
                    }
                ], IsChildVisible: false
            }
        ];
    }
}