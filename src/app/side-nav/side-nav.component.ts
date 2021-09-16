import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @ViewChild('main', {static: false}) main: ElementRef | undefined;

  mode = new FormControl('over');
  opened = false;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  mini = true;

  toggleSidebar(sideNav: HTMLDivElement) {
    // @ts-ignore
    if (this.mini) {
      console.log("opening sidebar");
      sideNav.style.width = "250px";
      this.mini = false;
    } else {
      console.log("closing sidebar");
      sideNav.style.width = "10px";
      this.mini = true;
    }
  }

}
