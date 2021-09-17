import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {range, Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit, OnDestroy {
  @ViewChild('operatorButton') operatorButton!: ElementRef<HTMLElement>;
  sub: Subscription[] = [];
  rangeForm!: FormGroup;
  rangeList!: number[];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.rangeForm = new FormGroup({
      'start': new FormControl('', Validators.required),
      'count': new FormControl(''),
      'scheduler': new FormControl('')
    });
  }

  ngOnDestroy() {
    this.sub.forEach(
      subscription => subscription.unsubscribe()
    )
  }

  runRangeOperator() {
    let rform = this.rangeForm;
    this.rangeList = [];
    const source = range(rform.get('start')?.value, rform.get('count')?.value);
    const example = source.subscribe(val => this.rangeList.push(val));
  }

  onSubmit() {
    let elementById = document.getElementById('operatorProcessButton');
    let ariaExp = elementById!!.getAttribute('aria-expanded');
    console.log(ariaExp);
    if (ariaExp == 'false') {
      this.operatorButton.nativeElement.click();
/*
      elementById!!.click();*/
    }
    this.runRangeOperator();
  }
}
