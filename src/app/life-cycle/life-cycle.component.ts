import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  displayChild = false;
  constructor() {
    console.log('LifeCycleComponent:Constructor');
  }
  toggle() {
    this.displayChild = !this.displayChild;
  }
  ngOnInit(): void {
    console.log('LifeCycleComponent:OnInit');
  }

  ngAfterContentChecked(): void {
    console.log('LifeCycleComponent:AfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('LifeCycleComponent:AfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent:AfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent:AfterViewInit');
  }

  ngDoCheck(): void {
    console.log('AppComponent:AfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent:OnChanges');
  }

  ngOnDestroy(): void {
    console.log('AppComponent:OnDestroy');
  }
}
