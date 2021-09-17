import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {OfModel} from "./_model/of.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit, OnDestroy {

  @ViewChild('operatorButton') operatorButton!: ElementRef<HTMLElement>;
  sub: Subscription[] = [];
  ofArray: OfModel[] = [
    new OfModel('number', 20, 'square of number'),
    new OfModel('array', [1, 2, 3], 'the same'),
    new OfModel('string', 'sa', 'repeat 5 times'),
    new OfModel('object', {name: 'Yasin'}, 'get name attribute of object'),
    new OfModel('function', function hello() {
      return 'Hello';
    }, 'run the function and get the returned string'),
  ];
  globalOf!: string[];
  selection: OfModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  getSelection(item: OfModel) {
    return this.selection.findIndex(s => s.description === item.description) !== -1;
  }

  changeHandler(item: OfModel) {
    const description = item.description;

    const index = this.selection.findIndex(u => u.description === description);
    if (index === -1) {
      // ADD TO SELECTION
      // this.selection.push(item);
      this.selection = [...this.selection, item];
    } else {
      // REMOVE FROM SELECTION
      this.selection = this.selection.filter(of => of.description !== item.description)
      //this.selection.splice(index, 1)
    }
  }

  save() {
    console.log(this.selection);
  }

  ngOnDestroy() {
    this.sub.forEach(
      subscription => subscription.unsubscribe()
    )
  }

  ofProcess() {
    function openAnswer() {
      let elementById = document.getElementById('operatorProcessButton');
      let ariaExp = elementById!!.getAttribute('aria-expanded');
      console.log(ariaExp);
      if (ariaExp == 'false') {
        elementById!!.click();
      }
    }

    openAnswer();
    this.globalOf = [];
    this.sub.push(of(...this.selection)
      .pipe(map((x: OfModel) => {
        let module = x.module;
        if (typeof module == 'number') {
          return {v: module * module, d: x.description, i: 0};
        } else if(module instanceof Array) {
          return {v: [...module], d: x.description, i: 1};
        } else if (typeof module == 'string') {
          return {v:  module.repeat(5), d: x.description, i: 2};
        } else if (typeof module === typeof {name: 'Yasin'}) {
          return {v:  module.name, d: x.description, i:  3};
        } else if (typeof module == 'function') {
          return {v:  module(), d: x.description, i:  4};
        } else return null;
      }))
      .subscribe((x) => {
        this.globalOf.push(x?.d + ' -> ' + x?.v);
        console.log(this.globalOf);
      }));
  }
}
