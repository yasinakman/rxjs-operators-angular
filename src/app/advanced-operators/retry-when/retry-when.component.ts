import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {of, Subscription} from "rxjs";
import {RetryWhenService} from "../_service/retry-when.service";
import {catchError, delay, map, retry, retryWhen, tap} from "rxjs/operators";

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.css']
})
export class RetryWhenComponent implements OnInit, OnDestroy {
  sub: Subscription[] = [];
  @ViewChild('result', {static: false}) result!: ElementRef;

  constructor(private retryWhenService: RetryWhenService,
              private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  runRetryWhenOperator(x: string) {
    this.sub.push(this.retryWhenService.getRequest(x)
      .pipe(map(value => {
          this.createElement();
        }),
        /*retry(10)*/
        retryWhen(
          error =>
            error.pipe(
              tap(() => {
                console.log("error occurred ");
                this.createElement2();
              }),
              delay(2000),
              tap(() => console.log("Retrying ..."))
            )
        )
      )
      .subscribe({
        next(response) {
          console.log(response);
        },
        error(err) {
          console.error('Error: ' + err);
        },
        complete() {
          console.log('Completed');
        }
      })
    );
  }

  createElement() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('SUCCESSED');

    this.renderer.addClass(div, 'm-sm-2');
    this.renderer.addClass(div, 'card');
    this.renderer.addClass(div, 'card-body');
    this.renderer.addClass(div, 'mx-auto');
    this.renderer.addClass(div, 'rounded');
    this.renderer.addClass(div, 'shadow-lg');
    this.renderer.setStyle(div, 'color', 'white');
    this.renderer.setStyle(div, 'background-color', 'green');
    this.renderer.setStyle(div, 'text-align', 'center');
    this.renderer.setStyle(div, 'font-size', '20px');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.result.nativeElement, div);
  }

  createElement2() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('ERROR');

    this.renderer.addClass(div, 'm-sm-2');
    this.renderer.addClass(div, 'card');
    this.renderer.addClass(div, 'card-body');
    this.renderer.addClass(div, 'mx-auto');
    this.renderer.addClass(div, 'rounded');
    this.renderer.addClass(div, 'shadow-lg');
    this.renderer.setStyle(div, 'color', 'white');
    this.renderer.setStyle(div, 'background-color', 'red');
    this.renderer.setStyle(div, 'text-align', 'center');
    this.renderer.setStyle(div, 'font-size', '20px');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.result.nativeElement, div);
  }

  onSubmit(x: string) {
    let elementById = document.getElementById('operatorProcessButton');
    let ariaExp = elementById!!.getAttribute('aria-expanded');
    console.log(ariaExp);
    if (ariaExp == 'false') {
      elementById!!.click();
    }
    this.runRetryWhenOperator(x);
  }

  onReset() {
    this.ngOnDestroy();
    const childElements = this.result.nativeElement.children;
    for (let child of childElements) {
      this.renderer.removeChild(this.el.nativeElement, child);
    }
  }

  ngOnDestroy() {
    this.sub.forEach(
      subscription => subscription.unsubscribe()
    )
  }

  getDescription(): string {
    return '  runRetryWhenOperator(x: string) {\n' +
      '    this.sub.push(this.retryWhenService.getRequest(x)\n' +
      '      .pipe(map(value => {\n' +
      '          this.createElement();\n' +
      '        }),\n' +
      '        /*retry(10)*/\n' +
      '        retryWhen(\n' +
      '          error =>\n' +
      '            error.pipe(\n' +
      '              tap(() => {\n' +
      '                this.createElement2();\n' +
      '              }),\n' +
      '              delay(2000),\n' +
      '              tap(() => console.log("Retrying ..."))\n' +
      '            )\n' +
      '        )\n' +
      '      )\n' +
      '      .subscribe();';
  }
}
