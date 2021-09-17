import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs'; /*
import {DataStorageService} from '../shared/_service/data-storage.service';*/

@Component({
  selector: 'app-tab-basic',
  templateUrl: './tab-basic.component.html',
  styleUrls: ['./tab-basic.component.css']
})
export class TabBasicComponent implements OnInit, OnDestroy {
  /*@Output() selectedTab = new EventEmitter<string>();*/

  /*onSelect(tab: string) {
    this.selectedTab.emit(tab);
  }*/

  private sub: Subscription[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,/*
              private dataStorageService: DataStorageService,*/) {
  }

  ngOnInit(): void {
  }

  onReload(): void {
    this.router.navigate(['/'], {relativeTo: this.route});
  }

  refresh(): void {
    window.location.reload();
  }

  /*
    onSaveData(): void {
      this.dataStorageService.storeRecipes();
    }

    onFetchData(): void {
      this.dataStorageService.fetchRecipes().subscribe();
    }*/

  ngOnDestroy(): void {
    this.sub.forEach(value =>
      value.unsubscribe());
  }
}
