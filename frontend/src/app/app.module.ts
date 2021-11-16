import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { SpinnersAngularModule } from 'spinners-angular';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    SpinnersAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
