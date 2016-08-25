import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { DashboardComponent }       from './dashboard/dashboard.component';
import { ExpenseListComponent }     from './expenses/expense-list.component';
import { ExpenseService }           from './expenses/expense.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    ExpenseListComponent
  ],
  providers: [
    ExpenseService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
