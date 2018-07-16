import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SearchComponent } from './search/search.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { MyCustomMaterialModule } from './myCustomMaterialModule';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
