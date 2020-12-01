import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[] = [
    new Event('Holly JS', 'This is js event', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'),
    new Event('Dot Net Fest', 'This .NET', 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
