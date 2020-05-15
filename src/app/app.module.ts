import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { FirstChildComponentComponent } from './first-child-component/first-child-component.component';
import { SecongChildComponentComponent } from './secong-child-component/secong-child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    FirstChildComponentComponent,
    SecongChildComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
