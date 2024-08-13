import { OutSideDirective } from './../../out-side.directive';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule , OutSideDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
isclicked:boolean=false;
imgsrc:string=""
open(src:string){
  this.isclicked=true;
  this.imgsrc=src;
  console.log('open')
}
clickedoutside():void{
this.isclicked=false;
console.log('close')
}

}
