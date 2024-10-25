import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  items: MenuItem[]=[];


  ngOnInit(): void {
    this.items = [
      {
        label: 'Professors',
        icon: 'pi pi-fw pi-user',
        routerLink: '/professors'
      },
      {
        label: 'Students',
        icon: 'pi pi-fw pi-users',
        routerLink: '/students'
      },
      {
        label: 'Admission',
        icon: 'pi pi-fw pi-id-card',
        routerLink: '/admission'
      },
      {
        label: 'Loans',
        icon: 'pi pi-fw pi-book',
        routerLink: '/loans'
      },
      {
        label: 'Programs',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: '/programs'
      },
      {
        label: 'Program Directors',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: '/programsdir'
      },
      {
        label: 'Reports',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/reports'
      }
    ];
  }
}
