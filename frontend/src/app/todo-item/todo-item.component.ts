import { TodoItem } from './../../models/todoitem.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem | null = null;
  @Input() onRemove: Function = () => {};
  @Input() onToggle: Function = () => {};

  constructor() { }

  ngOnInit(): void {
  }

}
