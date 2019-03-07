import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {
  @Input() page:String;
  constructor() { }

  ngOnInit() {
  }

}
