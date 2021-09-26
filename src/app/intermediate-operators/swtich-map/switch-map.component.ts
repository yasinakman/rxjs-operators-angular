import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, interval, Subject, Subscription} from "rxjs";
import {switchMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit, OnDestroy {
  sub: Subscription[] = [];
  buttonSub!: Subscription;

  timerList: number[] = [];
  timerListSwitch: number[] = [];
  start = 0;

  notifier = new Subject();

  constructor() {
  }

  ngOnInit(): void {
    let buttonTimer = document.getElementById('button-timer');

    const extracted = () => {
      if (this.timerList.length === 10) {
        this.timerList.splice(9, 1);
      }
    }

    const extractedSwitch = () => {
      if (this.timerListSwitch.length === 10) {
        this.timerListSwitch.splice(9, 1);
      }
    }

    if (buttonTimer) {
      let buttonObs = fromEvent(buttonTimer, 'click');
      let numberObs = interval(1000);
      this.buttonSub = buttonObs.subscribe(event => {
        this.sub.push(numberObs.subscribe(number => {
          this.timerList.unshift(number)
          extracted.call(this);
        }));
      });
    }

    let switchMapTimer = document.getElementById('button-timer-switch-map');
    if (switchMapTimer) {
      let buttonObs = fromEvent(switchMapTimer, 'click');
      let numberObs = interval(1000);

      // the older subscriptions will be killed automatically.
      this.buttonSub = buttonObs.pipe(switchMap(event => {
        this.timerListSwitch = [];
        return numberObs.pipe(takeUntil(this.notifier));
      }))
        .subscribe(number => {
          this.timerListSwitch.unshift(number);
          extractedSwitch.call(this);
        });
    }
  }

  onKill() {
    this.notifier.next()
    this.notifier.complete()
    this.notifier = new Subject();
    this.sub.forEach(sub => sub.unsubscribe());
    this.timerList = [];
    this.timerListSwitch = [];
  }

  onSubmit() {
    let elementById = document.getElementById('operatorProcessButton');
    let ariaExp = elementById!!.getAttribute('aria-expanded');
    console.log(ariaExp);
    if (ariaExp == 'false') {
      elementById!!.click();
    }
  }

  ngOnDestroy() {
    this.sub.forEach(
      subscription => subscription.unsubscribe()
    );
    this.buttonSub.unsubscribe();
  }
}
