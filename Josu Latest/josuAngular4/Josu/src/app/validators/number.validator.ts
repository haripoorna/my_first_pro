import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({ 
  selector:'[numbersonly]'
})
export class NumberOnlyValidator {
  private defaultColor:string = 'blue';
  constructor(private el: ElementRef) {
   
  }
  @HostListener("keypress",['$event']) OnKeypress(evt) {
      console.log(evt);
      var reg = new RegExp('[0-9]');
     if( !reg.test(evt.key)){
         evt.preventDefault();
     }
  }
  
}