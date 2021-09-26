import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, of, Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {concatMap, delay, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-merge-concat-map',
  templateUrl: './merge-and-concat-map.component.html',
  styleUrls: ['./merge-and-concat-map.component.css']
})
export class MergeAndConcatMapComponent implements OnInit, OnDestroy {
  sub: Subscription[] = [];
  mergeMapForm!: FormGroup;
  action = -1;
  mergeOrConcatList: string[] = [];

  constructor() {
  }

  getDescription(): string {
    if (this.action === 0) {
      return '' +
        '    let firstObservable = fromEvent(elementFirst, \'input\');\n' +
        '    let lastObservable = fromEvent(elementLast, \'input\');\n' +
        '\n' +
        '    firstObservable.subscribe(first => {\n' +
        '        spanLabel.textContent = (first.target as HTMLInputElement).value\n' +
        '      }\n' +
        '    );\n' +
        '\n' +
        '    lastObservable.subscribe(last => {\n' +
        '        spanLabel.textContent = (last.target as HTMLInputElement).value\n' +
        '      }\n' +
        '    );';
    } else if (this.action === 1) {
      return '' +
        'this.sub.push(firstObservable.pipe(mergeMap(firstEvent => {\n' +
        '          return lastObservable.pipe(map(lastEvent =>\n' +
        '            (firstEvent.target as HTMLInputElement).value + (lastEvent.target as HTMLInputElement).value\n' +
        '          ))\n' +
        '        }\n' +
        '      )).subscribe(spanValue => {\n' +
        '        return spanLabel.textContent = spanValue\n' +
        '      }));';
    } else if (this.action === 2) {
      return '' +
        'this.mergeMapForm.valueChanges.subscribe(value => {\n' +
        '        let outputLabel = document.getElementById(\'output-label\') as HTMLSpanElement;\n' +
        '        if (value.first.length > 0 || value.last.length > 0) {\n' +
        '          outputLabel.innerHTML = this.mergeMapForm.get(\'first\')?.value\n' +
        '          + this.mergeMapForm.get(\'last\')?.value;\n' +
        '        }\n' +
        '        else {\n' +
        '          outputLabel.innerHTML = \'\';\n' +
        '        }\n' +
        '      });';
    } else {
      return '';
    }
  }

  ngOnInit(): void {
    this.mergeMapForm = new FormGroup({
      'first': new FormControl(''),
      'last': new FormControl('')
    })

    document.querySelectorAll(".dropdown-item").forEach((el) => {
      (el as HTMLInputElement).onclick = (ev) => {

        (document.getElementById("usage") as HTMLInputElement).textContent =
          (ev.currentTarget as HTMLInputElement).textContent;
      }
    });
  }

  onKill() {
    this.sub.forEach(sub => sub.unsubscribe());
    (document.getElementById("usage") as HTMLInputElement)
      .textContent = 'select an option';
    (document.getElementById('output-label') as HTMLSpanElement)
      .textContent = '';
    this.action = -1;
    this.mergeOrConcatList = [];
  }

  onClick(action: number) {
    this.action = action;
    let elementFirst = document.getElementById('first') as HTMLInputElement;
    let elementLast = document.getElementById('last') as HTMLInputElement;
    let spanLabel = document.getElementById('output-label') as HTMLSpanElement;

    let firstObservable = fromEvent(elementFirst, 'input');
    let lastObservable = fromEvent(elementLast, 'input');

    if (action === 0) {
      this.sub.push(firstObservable.subscribe(first => {
          this.onSubmit();
          spanLabel.textContent = (first.target as HTMLInputElement).value;
        }
      ));

      this.sub.push(lastObservable.subscribe(last => {
          this.onSubmit();
          spanLabel.textContent = (last.target as HTMLInputElement).value;
        }
      ));
    } else if (action === 1) {
      this.sub.push(firstObservable.pipe(mergeMap(firstEvent => {
          console.log(firstEvent);
          return lastObservable.pipe(map(lastEvent =>
            (firstEvent.target as HTMLInputElement).value + (lastEvent.target as HTMLInputElement).value
          ))
        }
      )).subscribe(spanValue => {
        this.onSubmit();
        spanLabel.textContent = spanValue;
      }));
    } else if (action === 2) {
      this.sub.push(this.mergeMapForm.valueChanges.subscribe(value => {
        let outputLabel = document.getElementById('output-label') as HTMLSpanElement;
        if (value.first.length > 0 || value.last.length > 0) {
          outputLabel.innerHTML = this.mergeMapForm.get('first')?.value;
          outputLabel.innerHTML += this.mergeMapForm.get('last')?.value;
          this.onSubmit();
        } else {
          outputLabel.innerHTML = '';
        }
      }));
    }
  }

  ngOnDestroy() {
    this.sub.forEach(
      subscription => subscription.unsubscribe()
    );
  }

  onSubmit() {
    let elementById = document.getElementById('operatorProcessButton');
    let ariaExp = elementById!!.getAttribute('aria-expanded');
    if (ariaExp == 'false') {
      elementById!!.click();
    }
  }

  mergeOrConcatButton(action: number) {
    let first = document.getElementById('one') as HTMLInputElement;
    let second = document.getElementById('second') as HTMLInputElement;
    let third = document.getElementById('third') as HTMLInputElement;

    if (action === 0) {
      this.mergeOrConcatList = [];
      of({label: 'First', delay: first.valueAsNumber}, {label: 'Second', delay: second.valueAsNumber},
        {label: 'Third', delay: third.valueAsNumber})
        .pipe(concatMap((val) =>
          of(val.label + ' process delayed by: ' + val.delay + 'ms').pipe(delay(val.delay))
        ))
        .subscribe((result) => {
          this.mergeOrConcatList.push('With concatMap: ' + result)
        });
    } else if (action === 1) {
      this.mergeOrConcatList = [];
      of({label: 'First', delay: first.valueAsNumber}, {label: 'Second', delay: second.valueAsNumber},
        {label: 'Third', delay: third.valueAsNumber})
        .pipe(mergeMap((val) =>
          of(val.label + ' process delayed by: ' + val.delay + 'ms').pipe(delay(val.delay))
        ))
        .subscribe((result) => {
          this.mergeOrConcatList.push('With mergeMap: ' + result)
        });
    }
  }
}