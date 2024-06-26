import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  menus: any[] = []

  ngOnInit(): void {
      // this.router.events.subscribe((e) =)
  }

  constructor(private router: Router, private toast: ToastrService){
    this.menus = [
      {
        name: 'Inicio',
        route: '/main/home',
        type: 'simple'
      },
      {
        name: 'Mascotas',
        route: '/main/menu',
        type: 'simple'
      },
      {
        name: 'Buscar mascotas',
        route: '/main/search',
        type: 'simple'
      },
      {
        name: 'Campañas',
        route: '/main/campaigns',
        type: 'dropdown'
      },
      {
        name: 'Iniciar sesión',
        route: '/auth/login',
        type: 'simple'
      }
    ]
  }

  get items():any[]{
    return [];
  }

  public payCart(){
    this.toast.success("Orden pagada con éxito", "Pagos", {
      timeOut: 5000
    })
  }
}
