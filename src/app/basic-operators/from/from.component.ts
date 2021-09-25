import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import { range, Subscription} from "rxjs";
import { from } from 'rxjs';
import {FormControl, FormGroup, Validators} from "@angular/forms";

enum AnimalTypes {
  animals, fly, nonFly, run, nonRun, crawl, nonCrawl, swimming, nonSwimming
}

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit, OnDestroy {
  sub: Subscription[] = [];
  fromForm!: FormGroup;
  fromList!: {text: string, animal: string}[];
  animalList = ['🐦', '😺', '🐕', '🐊', '🐁', '🐐', '🐍', '🐬', '🐛', '🦋'];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.fromForm = new FormGroup({
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

  runFromOperator(type: string) {
    this.fromList = [];

    let animals = {type: 'animals' , animals: this.animalList};
    let flyingAnimals = {type: 'fly' , animals: ['🐦', '🦋']};
    let nonFlyingAnimals = {type: 'not fly' , animals: ['😺', '🐕', '🐊', '🐁', '🐐', '🐍', '🐛']};
    let runnableAnimals = {type: 'run' , animals: ['😺', '🐕', '🐁', '🐐']};
    let nonRunnableAnimals = {type: 'not run' , animals: ['🐦', '🐊', '🐍', '🐛', '🦋']};
    let crawlableAnimals = {type: 'crawl' , animals: ['🐊', '🐍', '🐛']};
    let nonCrawlableAnimals = {type: 'not crawl' , animals: ['🐦', '😺', '🐕', '🐁', '🐐', '🦋']};
    let swimmingAnimals = {type: 'swim' , animals: ['🐬', '🐕', '🐊', '🐍']};
    let nonSwimmingAnimals = {type: 'not swim' , animals: ['🐦', '😺', '🐕', '🐊', '🐁', '🐐', '🐍', '🐛', '🦋']};
    const arr = [animals, flyingAnimals, nonFlyingAnimals, runnableAnimals, nonRunnableAnimals,
      crawlableAnimals, nonCrawlableAnimals, swimmingAnimals, nonSwimmingAnimals];

    const typeIndex = Object.values(AnimalTypes).indexOf(type);
    from(arr[typeIndex].animals.map(x => typeIndex != 0 ? {text: 'Hello, I can ' + Object.values(arr)[typeIndex].type + ' ', animal: x} : {text: "Animal: ", animal: x}))
      .subscribe(value => this.fromList.push(value));

/*
    console.log(Object.keys(AnimalTypes));
    console.log(Object.values(AnimalTypes));
    console.log(Object.values(AnimalTypes)[type]);
*/

    // Hello 😺!
    // Hello 🐕!
    // Hello 🐊!

  }

  onSubmit(type: string) {
    let elementById = document.getElementById('operatorProcessButton');
    let ariaExp = elementById!!.getAttribute('aria-expanded');
    console.log(ariaExp);
    if (ariaExp == 'false') {
      elementById!!.click();
    }
    this.runFromOperator(type);
  }
}
