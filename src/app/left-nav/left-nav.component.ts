import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  @Input() page:String;
  constructor() { }

  ngOnInit() {
  }

}
