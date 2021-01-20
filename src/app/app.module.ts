import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { TopRowComponent } from './top-row/top-row.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent, TopRowComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
