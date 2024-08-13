import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
//////////////////////////////  active class comparing with path in url /////////////////////
  constructor(private router: Router) {}
  isActive(route: string): boolean {
    return this.router.url === route;
  }
  //////////////////////////////  transition on navbar /////////////////////
  @ViewChild('navbar') el!:ElementRef;
  @HostListener('window:scroll') changeWidth() {
if(scrollY > 100){
  this.el.nativeElement.style.height= '90px';
}else{
  this.el.nativeElement.style.height= '110px';
}
  }
}

