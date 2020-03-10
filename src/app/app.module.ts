import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CustomersComponent} from './customers/customers.component';
import {AuthGuardService} from './adalservice/adal.guard';
import {Routes} from '@angular/router';
import {AuthService} from './adalservice/adal.service';
import {AdalGuard, AdalService} from 'adal-angular4';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import {TempConverterPipe} from './temp-convertor.pipe';
import {ChildComponentComponent} from './child-component/child-component.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import {LifeCycleChildComponent} from './life-cycle-child/life-cycle-child.component';
import { LifeCycleInitDestroyComponent } from './life-cycle-init-destroy/life-cycle-init-destroy.component';
import { LifeCycleOnchangesComponent } from './life-cycle-onchanges/life-cycle-onchanges.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    PipeExampleComponent,
    TempConverterPipe,
    ChildComponentComponent,
    LifeCycleComponent,
    LifeCycleChildComponent,
    LifeCycleInitDestroyComponent,
    LifeCycleOnchangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdalService,
    AdalGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
