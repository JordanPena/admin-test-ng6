import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  collapsed: boolean;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor() { 
    this.collapsed = false;
  }

  ngOnInit() {
  }

  toggleCollapsed(){
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }
}
