import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) {
  }

  @HostBinding('class.open') isOpen = false;

  @HostListener('mouseover') mouseOver() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.isOpen = false;
  }

  /*

    @HostListener('click') click() {
      this.isOpen = !this.isOpen;
    }
  */

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    /*console.log(event);
    console.log(this.elRef.nativeElement);*/
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
