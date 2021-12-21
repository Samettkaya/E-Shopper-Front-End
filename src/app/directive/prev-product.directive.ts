import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrevProduct]'
})
export class PrevProductDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  prevFunc(){
   var elm=this.el.nativeElement.parentElement.parentElement.children[0];
   var item=elm.getElementsByClassName("item")
   elm.prepend(item[item.length -1])
  }
}
