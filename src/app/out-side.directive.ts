import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appOutSide]',
  standalone: true
})
export class OutSideDirective implements AfterViewInit , OnDestroy {
@Output() clikOutside = new EventEmitter<void>();

documentClickSubscription: Subscription | undefined ;
  constructor(private element:ElementRef , @Inject(Document) private document:Document ) { }
ngAfterViewInit(): void {
  this.documentClickSubscription =fromEvent(this.document , 'click').pipe(
    filter((event) => {
    return !this.isInside(event?.target as HTMLElement)
  })
  ).subscribe(() => {
this.clikOutside.emit();
  })
}

ngOnDestroy(): void {
  this.documentClickSubscription?.unsubscribe()
}
isInside(elementTocheck:HTMLElement):boolean {
  return elementTocheck === this.element.nativeElement || this.element.nativeElement.contains(elementTocheck)
}

}

