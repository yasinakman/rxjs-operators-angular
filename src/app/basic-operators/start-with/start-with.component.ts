import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {from, Subscription} from "rxjs";
import {filter} from "rxjs/operators";

enum AnimalTypes {
  animals, fly, nonFly, run, nonRun, crawl, nonCrawl, swimming, nonSwimming
}

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit, OnDestroy {
  sub: Subscription[] = [];
  countryList: { name: string, number: string }[] =
    [{name: "Turkey", number: "+90"}, {name: "Gerany", number: "+49"}];
  numberList: { name: string, number: string }[] =
    [{name: "Yasin", number: "+905392832234"}, {name: "Talha", number: "+905391325468"},
      {name: "Akman", number: "+4917664612175"}, {name: "Yasin", number: "+491639723428"}];
  checked = false;
  filterList!: {name: string, number: string}[];

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub.forEach(
      subscription => subscription.unsubscribe()
    )
  }


  openProcessTab() {
    let elementById = document.getElementById('operatorProcessButton');
    let ariaExp = elementById!!.getAttribute('aria-expanded');
    console.log(ariaExp);
    if (ariaExp == 'false') {
      elementById!!.click();
    }
  }

  getCountryOrContacts($event: Event) {
    this.openProcessTab();
    let event = $event.target as HTMLInputElement;
    let elementById = document.getElementById('checkbox') as HTMLInputElement;
    if (elementById) {
      console.log($event);
      console.log(elementById);
      let checked = elementById.checked;
      console.log(checked);
      this.filterList = [];
      if (checked) {
        this.countryList.filter(value => value.number.startsWith(event.value)).map(value => this.filterList.push(value));
      } else {
        this.numberList.filter(value => value.number.startsWith(event.value)).map(value => this.filterList.push(value));
      }
      console.log(this.filterList);
    }/*
    console.log(event.value);
    console.log(event.type);*/
  }
}
