import { TodoItem } from './../../models/todoitem.model';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  date = moment();
  newitemName: string = ""
  items: TodoItem[] = []

  hasLoaded: boolean = false;
  isSaving: boolean = false;

  constructor() { }

  getItems(): void{
    fetch(`${environment.apiServer}/list`).then(res => res.json()).then(json => {
      this.items = json
      this.hasLoaded = true
    })
  }

  addItem(): void {
    if(this.newitemName && !this.isSaving){
      this.isSaving = true;
      fetch(`${environment.apiServer}/create`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        content: this.newitemName
      })}).then(res => {
        if(res.status == 201){
          res.json().then(json => {
            this.isSaving = false;
            this.items.unshift(json)
            this.newitemName = ""
          })
        }
      })
    }
  }

  get onRemoveItem() {
    return this.removeItem.bind(this);
  }

  removeItem(item_id: string): void {
    fetch(`${environment.apiServer}/delete`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      item_id
    })}).then(res => {
      if(res.status == 200){
        this.items = this.items.filter(item => item._id != item_id)
      }
    })
  }

  get onToggleDone() {
    return this.toggleDone.bind(this);
  }

  toggleDone(item_id: string, is_done: boolean): void {
    fetch(`${environment.apiServer}/mark_done`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      item_id,
      is_done
    })}).then(res => {
      if(res.status == 200){
        this.items = this.items.map(item => item._id === item_id ? { ...item, is_done } : item)
      }
    })
  }

  ngOnInit(): void {
    this.getItems()
    setInterval(() => {
      this.date = moment()
    }, 1000)
  }

}
